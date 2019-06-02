import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import * as GatewayAction from '../../store/actions/gateway.actions';
import * as fromStore from '../../store/reducers';
import * as fromSelector from '../../store/selectors';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Alert, Modal} from '../../store/reducers/device.reducer';
import {isUndefined} from 'util';

export enum FORM_ACTIONS {
  NONE = 'None',
  ADD = 'Add',
  EDIT = 'Edit',
  REMOVE = 'Remove',
}

export enum ENTITIES {
  GATEWAY = 'Gateway',
  DEVICE = 'Device'
}

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

  public gateways$: Observable<any>;
  public alert$: Observable<any>;
  public modal$: Observable<any>;

  private modalRef: NgbModalRef;

  constructor(private store: Store<fromStore.AppState>, private modalService: NgbModal) {

    this.store.select(fromSelector.areGatewaysLoaded).subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new GatewayAction.LoadGateways());
      }
    });

    this.gateways$ = this.store.select(fromSelector.getGateways);

    this.alert$ = this.store.select(fromSelector.getGatewayAlert);
    this.modal$ = this.store.select(fromSelector.getGatewayModal);
  }

  ngOnInit() {
    this.alert$.subscribe((alert: Alert) => {
      if (alert.status === 'success' || alert.status === 'danger') {
        this.hideModal();
      }
    });

    this.modal$.subscribe((modal: Modal) => {
        if (modal.show) {
          this.open(modal.data.content);
        } else {
          if (!isUndefined(this.modalRef)){
            this.modalRef.close();
          }
        }
    });
  }

  public hideAlert() {
    this.store.dispatch(new GatewayAction.HideAlert);
  }

  public openEdit(content, gatewayId) {
    this.store.dispatch(new GatewayAction.LoadSelectedGateway(gatewayId));
    this.store.dispatch(new GatewayAction.ShowModal({
      entity: ENTITIES.GATEWAY,
      formAction: FORM_ACTIONS.EDIT,
      data: {
        content: content
      }
    }));
  }

  public openAdd(content) {
    this.store.dispatch(new GatewayAction.ShowModal({
      entity: ENTITIES.GATEWAY,
      formAction: FORM_ACTIONS.ADD,
      data: {
        content: content
      }
    }));
  }

  private open(content) {
    const options: NgbModalOptions = {ariaLabelledBy: 'modal-basic-title'} as NgbModalOptions;
    this.modalRef = this.modalService.open(content, options);
    this.modalRef.result.then(
      (result) => {},
      (reason) => {});
  }

  private hideModal() {
    this.store.dispatch(new GatewayAction.HideModal);
  }
}
