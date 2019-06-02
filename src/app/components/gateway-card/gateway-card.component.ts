import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ENTITIES, FORM_ACTIONS} from '../gateways/gateways.component';
import * as DeviceAction from '../../store/actions/device.actions';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as fromSelector from '../../store/selectors';
import {Observable} from 'rxjs/Observable';
import {Alert, Modal} from '../../store/reducers/device.reducer';
import {isUndefined} from 'util';

@Component({
  selector: 'app-gateway-card',
  templateUrl: './gateway-card.component.html',
  styleUrls: ['./gateway-card.component.scss']
})
export class GatewayCardComponent implements OnInit {

  public gateway$: Observable<any>;
  public devices$: Observable<any>;

  public alert$: Observable<any>;
  public modal$: Observable<any>;

  private modalRef: NgbModalRef;

  private deleteDeviceID: string;

  constructor(private store: Store<fromStore.AppState>, private _activated: ActivatedRoute, private _modalService: NgbModal) {
    const gatewayId = _activated.snapshot.params['id'];

    this.store.dispatch(new DeviceAction.LoadSelectedGateway(gatewayId));
    this.store.dispatch(new DeviceAction.LoadDevices(gatewayId));

    this.gateway$ = this.store.select(fromSelector.getSelectedGateway);
    this.devices$ = this.store.select(fromSelector.getDevices);

    this.alert$ = this.store.select(fromSelector.getDeviceAlert);
    this.modal$ = this.store.select(fromSelector.getDeviceModal);
  }

  ngOnInit() {
    this.alert$.subscribe((alert: Alert) => {
      if (alert.status === 'success' || alert.status === 'danger') {
        this.hideModal();
      }
    });

    this.modal$.subscribe((modal: Modal) => {
      this.deleteDeviceID = modal.data.dvId;
        if (modal.show) {
          this.open(modal.data.content);
        } else {
          if (!isUndefined(this.modalRef)){
            this.modalRef.close();
          }
        }
    });
  }

  public openEdit(content, deviceId) {
    this.store.dispatch(new DeviceAction.LoadSelectedDevice(deviceId));
    this.store.dispatch(new DeviceAction.ShowModal({
      entity: ENTITIES.DEVICE,
      formAction: FORM_ACTIONS.EDIT,
      data: {
        content: content,
        dvId: deviceId
      }
    }));
  }

  public openRemove(content, deviceId) {
    this.store.dispatch(new DeviceAction.ShowModal({
      entity: ENTITIES.DEVICE,
      formAction: FORM_ACTIONS.REMOVE,
      data: {
        content: content,
        dvId: deviceId
      }
    }));
  }

  public openAdd(content) {
    this.store.dispatch(new DeviceAction.ShowModal({
      entity: ENTITIES.DEVICE,
      formAction: FORM_ACTIONS.ADD,
      data: {
        content: content
      }
    }));
  }

  public hideModal() {
    this.store.dispatch(new DeviceAction.HideModal);
  }

  public hideAlert() {
    this.store.dispatch(new DeviceAction.HideAlert);
  }

  public removeDevice() {
      this.store.dispatch(new DeviceAction.RemoveDevice(this.deleteDeviceID));
  }

  private open(content) {
    const options: NgbModalOptions = {ariaLabelledBy: 'modal-basic-title'} as NgbModalOptions;
    this.modalRef = this._modalService.open(content, options);
    this.modalRef.result.then(
      (result) => {},
      (reason) => {});
  }

}
