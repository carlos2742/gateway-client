import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MemClientService} from './mem-client.service';
@Injectable()
export class GatewaysService {

  private url: string;
  constructor(private http: HttpClient, private mem: MemClientService) {
    this.url = !this.isMemoryEnv ? `${environment.apiUrl}/gateways` : '';
  }

  private get isMemoryEnv() {
    return environment.name === 'memory';
  }

  get list() {
    return !this.isMemoryEnv ? this.http.get(this.url) : this.mem.gatewaylist();
  }

  public gatewayById(gatewayId) {
    const urlParam = `${this.url}/${gatewayId}`;
    return !this.isMemoryEnv ? this.http.get(urlParam) : this.mem.gatewayById(gatewayId);
  }

  public add(data) {
    return !this.isMemoryEnv ? this.http.post(this.url, data) : this.mem.addGateway(data);
  }

  public edit(gatewayId, data) {
    const urlParam = `${this.url}/${gatewayId}`;
    return !this.isMemoryEnv ? this.http.put(urlParam, data) : this.mem.editGateway(gatewayId, data);
  }

  public deviceList(gatewayId) {
    const urlParam = `${this.url}/${gatewayId}/devices`;
    return !this.isMemoryEnv ? this.http.get(urlParam) : this.mem.deviceList(gatewayId);
  }

  public addDevice(gatewayId, data) {
    const urlParam = `${this.url}/${gatewayId}/device`;
    return !this.isMemoryEnv ? this.http.post(urlParam, data) : this.mem.addDevice(gatewayId,data);
  }
}
