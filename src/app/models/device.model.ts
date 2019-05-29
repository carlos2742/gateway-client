import {DEVICES_STATUS} from '../components/form-dev/form-dev.component';

export interface Device {
  _id?: string;
  uid?: number;
  vendor?: string;
  created?: Date;
  status?: DEVICES_STATUS;
  gateway?: string;
}
