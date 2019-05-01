import { Component, OnInit } from '@angular/core';
import {GatewaysService} from '../../services/gateways.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

export enum FORM_ACTIONS {
  ADD = 'Add',
  EDIT = 'Edit'
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

  public gateways: Array<any>;
  public action: FORM_ACTIONS;
  public entity: ENTITIES;
  public data;

  public showAlert: boolean;
  public alertStatus: String;
  public alertMessage: String;

  constructor(private _gatewayService: GatewaysService, private modalService: NgbModal) {
    this.gateways = _gatewayService.list;
    this.data = {};
    this.showAlert = false;
  }

  ngOnInit() {
    this.entity = ENTITIES.GATEWAY;
  }

  openEdit(content, id) {
    this.data['id'] = id;
    this.action = FORM_ACTIONS.EDIT;
    this.open(content);
  }

  openAdd(content) {
    this.action = FORM_ACTIONS.ADD;
    this.open(content);
  }

  private open(content) {
    const options: NgbModalOptions = {ariaLabelledBy: 'modal-basic-title'} as NgbModalOptions;
    this.modalService.open(content, options).result.then((result) => {
      if (result['action'] === FORM_ACTIONS.ADD || result['action'] === FORM_ACTIONS.EDIT) {
        this.alertMessage = result['message'];
        this.alertStatus = result['status'];
        this.showAlert = true;
      }
    }, (reason) => {
    });
  }

  closeAlert() {
    this.showAlert = false;
  }

}
