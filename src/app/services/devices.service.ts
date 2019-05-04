import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MemClientService} from './mem-client.service';

@Injectable()
export class DevicesService {

  private url: string;
  constructor(private http: HttpClient, private mem: MemClientService) {
    this.url = !this.isMemoryEnv ? `${environment.apiUrl}/devices` : '';
  }

  private get isMemoryEnv() {
    return environment.name === 'memory';
  }

  public deviceById(deviceId) {
    const urlParam = `${this.url}/${deviceId}`;
    return !this.isMemoryEnv ? this.http.get(urlParam) : this.mem.deviceById(deviceId);
  }

  public edit(deviceId, data) {
    const urlParam = `${this.url}/${deviceId}`;
    return !this.isMemoryEnv ? this.http.put(urlParam, data) : this.mem.editDevice(deviceId, data);
  }

  public remove(deviceId) {
    const urlParam = `${this.url}/${deviceId}`;
    return !this.isMemoryEnv ? this.http.delete(urlParam) : this.mem.removeDevice(deviceId);
  }

}
