import {Component, Input, OnInit} from '@angular/core';
import {ENTITIES, FORM_ACTIONS} from '../gateways/gateways.component';
import {GatewaysService} from '../../services/gateways.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as fromSelector from '../../store/selectors';
import {Modal} from '../../store/reducers/device.reducer';
import {Gateway} from '../../models/gateway.model';
import * as GatewayAction from '../../store/actions/gateway.actions';

@Component({
  selector: 'app-form-gw',
  templateUrl: './form-gw.component.html',
  styleUrls: ['./form-gw.component.scss']
})
export class FormGwComponent implements OnInit {

  public title: String;
  public id: String;
  private action: FORM_ACTIONS;
  private gatewayId: String;

  public customform;

  public modal$: Observable<any>;

  constructor(private store: Store<fromStore.AppState>, private _formBuilder: FormBuilder) {
    this.modal$ = this.store.select(fromSelector.getGatewayModal);
  }

  ngOnInit() {
    this.modal$.subscribe((modal: Modal) => {
      this.title = `${modal.action} ${modal.entityName}`;
      const gateway: Gateway = modal.selectedEntity.entity;
      this.gatewayId = gateway._id;
      this.action = modal.action as FORM_ACTIONS;

      if (this.action === FORM_ACTIONS.EDIT) {
        this.createForm(gateway.serial, gateway.name, gateway.ipv4);
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
      this.editGateway(this.gatewayId, data);
    } else {
      this.addGateway(data);
    }
  }

  private createForm(serial = '', name = '', ipv4 = '') {
    this.customform = this._formBuilder.group({
      'serial': new FormControl(serial, [Validators.required]),
      'name': new FormControl(name, [Validators.required]),
      'ipv4': new FormControl(ipv4, [Validators.required, Validators.pattern('^([0-9]{1,3}\\.){3}[0-9]{1,3}$')]),
    });
  }

  private editGateway(gatewayId, data) {
    this.store.dispatch(new GatewayAction.EditGateway({gatewayId, data}));
  }

  private addGateway(data) {
    this.store.dispatch(new GatewayAction.AddGateway(data));
  }

  public hideModal() {
    this.store.dispatch(new GatewayAction.HideModal);
  }
}
