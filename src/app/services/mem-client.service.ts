import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MemClientService {

  private gateways: Array<any>;
  private devices: Array<any>;

  constructor() {
    this.gateways = [
      {
        _id: 'qwerty',
        serial: '537G',
        name: 'Europe',
        ipv4: '10.0.0.1'
      },
      {
        _id: 'asdfg',
        serial: '79HX',
        name: 'America',
        ipv4: '10.0.0.2'
      },
    ];
    this.devices = [
      {
        _id: 'zxcv',
        uid: 1,
        vendor: 'Huawei',
        created: new Date(),
        status: 'online',
        gateway: this.gateways[0]._id
      },
      {
        _id: 'yuiop',
        uid: 2,
        vendor: 'Cisco',
        created: new Date(),
        status: 'offline',
        gateway: this.gateways[0]._id
      }, {
        _id: 'hjkln',
        uid: 3,
        vendor: 'Cisco',
        created: new Date(),
        status: 'online',
        gateway: this.gateways[1]._id
      }
    ];
  }

  private createObservableResult(data) {
    return new Observable( observe => {
      observe.next(data);
      observe.complete();
    });
  }

  /*----------------------Gateways----------------------*/

  private findGateway(gatewayId) {
    return this.gateways.find( item => item._id === gatewayId);
  }

  private existSerial(serial) {
    return this.gateways.find(item => item.serial === serial) ? true : false;
  }

  public gatewaylist() {
    return this.createObservableResult({status: 'success', result: this.gateways});
  }

  public gatewayById(gatewayId) {
    const gateway = this.findGateway(gatewayId);
    return this.createObservableResult({status: 'success', result: gateway});
  }

  public addGateway(data) {
    if (this.existSerial(data['serial'])) {
      return this.createObservableResult({status: 'danger', message: 'Gateway serial must be unique.'});
    }
    const newGateway = data;
    data['_id'] = 'yhnuj';
    this.gateways.push(newGateway);
    return this.createObservableResult({status: 'success', result: newGateway});
  }

  public editGateway(gatewayId, data) {
    const gateway = this.findGateway(gatewayId);
    if (gateway.serial !== data['serial'] && this.existSerial(data['serial'])) {
      return this.createObservableResult({status: 'danger', message: 'Gateway serial must be unique.'});
    }
    gateway.serial = data.serial;
    gateway.name = data.name;
    gateway.ipv4 = data.ipv4;
    return this.createObservableResult({status: 'success', result: gateway});
  }

  /*----------------------Devices----------------------*/

  private findDevice(deviceId) {
    return this.devices.find( item => item._id === deviceId);
  }

  public deviceList(gatewayId) {
    const list = this.devices.filter(item => item.gateway === gatewayId);
    return this.createObservableResult({status: 'success', result: list});
  }

  public addDevice(gatewayId, data) {
    const newDevice = data;
    data['_id'] = 'yhnuj';
    data['created'] = new Date();
    data['gateway'] = gatewayId;
    this.devices.push(newDevice);
    return this.createObservableResult({status: 'success', result: newDevice});
  }

  public deviceById(deviceId) {
    const device = this.findDevice(deviceId);
    return this.createObservableResult({status: 'success', result: device});
  }
  public editDevice(deviceId, data) {
    const device = this.findDevice(deviceId);
    device.uid = data.uid ;
    device.vendor = data.vendor;
    device.status = data.status;
    return this.createObservableResult({status: 'success', result: device});
  }

  public removeDevice(deviceId) {
    const index = this.devices.findIndex( item => item._id === deviceId);
    const device = this.devices.splice(index, 1);
    return this.createObservableResult({status: 'success', result: device});
  }
}
