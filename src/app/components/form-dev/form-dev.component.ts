import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ENTITIES, FORM_ACTIONS} from '../gateways/gateways.component';
import {DevicesService} from '../../services/devices.service';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GatewaysService} from '../../services/gateways.service';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as fromSelector from '../../store/selectors';
import {Observable} from 'rxjs/Observable';
import {Modal} from '../../store/reducers/device.reducer';
import {Gateway} from '../../models/gateway.model';
import * as DeviceAction from '../../store/actions/device.actions';
import {Device} from '../../models/device.model';

export enum DEVICES_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline'
}

@Component({
  selector: 'app-form-dev',
  templateUrl: './form-dev.component.html',
  styleUrls: ['./form-dev.component.scss']
})
export class FormDevComponent implements OnInit {

  public title: String;
  public customform;
  public params$: Observable<any>;

  private modalRef: NgbModalRef;
  private gatewayId: String;
  private device: Device;
  private action: FORM_ACTIONS;

  constructor(private store: Store<fromStore.AppState>, private _device: DevicesService, private _gateway: GatewaysService, private _formBuilder: FormBuilder) {
    this.device = null;

    this.params$ = this.store.select(fromSelector.getComposeModalData);
  }

  ngOnInit() {
    this.params$.subscribe(data => {
      const modal: Modal = data['modal'];
      const gateway: Gateway = data['gateway'];

      this.gatewayId = gateway._id;
      this.title = `${modal.action} ${modal.entityName}`;
      this.action = modal.action as FORM_ACTIONS;

      if (this.action === FORM_ACTIONS.EDIT) {
        this.device = modal.selectedDevice.entity;
        this.title += ` ${this.device.uid}`;
        this.createForm(this.device.uid, this.device.vendor, this.device.status);
      } else {
        this.createForm();
      }
    });
  }

  public submit() {
    if (this.customform.invalid) {
      Object.keys(this.customform.controls).forEach(
        field => {
          const control = this.customform.get(field);
          control.markAsTouched({ onlySelf: true });
        });
      return;
    }

    const data = this.customform.value;
    if (this.action === FORM_ACTIONS.EDIT) {
      this.editDevice(this.device._id, data);
    } else {
      data['created'] = new Date();
      this.addDevice(this.gatewayId, data);
    }
  }

  private createForm(uid = -1, vendor = '', status = DEVICES_STATUS.ONLINE) {
    this.customform = this._formBuilder.group({
      'uid': new FormControl(uid < 0 ? '' : uid, [Validators.required, Validators.pattern('^\\d+$')]),
      'vendor': new FormControl(vendor, [Validators.required]),
      'status': new FormControl(status),
    });
  }

  private editDevice(deviceId, data) {
    this.store.dispatch(new DeviceAction.EditDevice({deviceId, data}));
  }

  private addDevice(gatewayId, data) {
    this.store.dispatch(new DeviceAction.AddDevice({gatewayId, data}));
  }

  public hideModal() {
    this.store.dispatch(new DeviceAction.HideModal);
  }

}
