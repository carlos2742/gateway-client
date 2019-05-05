import { Injectable } from '@angular/core';
import {MemClientService} from './mem-client.service';
@Injectable()
export class GatewaysService {

  constructor(private mem: MemClientService) {}

  get list() {
    return this.mem.gatewaylist();
  }

  public gatewayById(gatewayId) {
    return this.mem.gatewayById(gatewayId);
  }

  public add(data) {
    return this.mem.addGateway(data);
  }

  public edit(gatewayId, data) {
    return this.mem.editGateway(gatewayId, data);
  }

  public deviceList(gatewayId) {
    return this.mem.deviceList(gatewayId);
  }

  public addDevice(gatewayId, data) {
    return this.mem.addDevice(gatewayId, data);
  }
}
