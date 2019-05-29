import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import * as GatewayAction from '../../store/actions/gateway.actions';
import * as fromStore from '../../store/reducers';
import * as fromSelector from '../../store/selectors';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

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
  public action: FORM_ACTIONS;
  public entity: ENTITIES;
  public data;

  public alert: any;

  public modalRef: NgbModalRef;

  constructor(private store: Store<fromStore.AppState>, private modalService: NgbModal) {

    this.gateways$ = this.store.select(fromSelector.getGatewayEntities);

    this.store.select(fromSelector.areEntitiesLoaded).subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new GatewayAction.Load);
      }
    });

    this.data = {};
    this.alert = {
      show: false,
      status: '',
      message: ''
    };
  }

  ngOnInit() {
    this.entity = ENTITIES.GATEWAY;
  }

  public closeAlert() {
    this.alert = {
      show: false,
      status: '',
      message: ''
    };
  }

  public openEdit(content, id) {
    this.data['id'] = id;
    this.action = FORM_ACTIONS.EDIT;
    this.open(content);
  }

  public openAdd(content) {
    this.action = FORM_ACTIONS.ADD;
    this.open(content);
  }

  private open(content) {
    const options: NgbModalOptions = {ariaLabelledBy: 'modal-basic-title'} as NgbModalOptions;
    this.modalRef = this.modalService.open(content, options);
    this.modalRef.result.then((result) => {
      if (result['action'] === FORM_ACTIONS.ADD || result['action'] === FORM_ACTIONS.EDIT) {
        this.alert.message = result['message'];
        this.alert.status = result['status'];
        this.alert.show = true;
        if (result['status'] === 'success') {
          // this.getList();
        }
      }
    }, (reason) => {
    });
  }
}
