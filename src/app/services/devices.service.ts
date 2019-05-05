import { Injectable } from '@angular/core';
import {MemClientService} from './mem-client.service';

@Injectable()
export class DevicesService {

  constructor(private mem: MemClientService) {
  }

  public deviceById(deviceId) {
    return this.mem.deviceById(deviceId);
  }

  public edit(deviceId, data) {
    return this.mem.editDevice(deviceId, data);
  }

  public remove(deviceId) {
    return this.mem.removeDevice(deviceId);
  }

}
