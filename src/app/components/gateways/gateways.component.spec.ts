import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysComponent } from './gateways.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormGwComponent} from '../form-gw/form-gw.component';
import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GatewaysService} from '../../services/gateways.service';
import {MemClientService} from '../../services/mem-client.service';
import {RouterTestingModule} from '@angular/router/testing';

@Component({selector: 'form', template: ''})
class FormStubComponent {
  @Input() formGroup: FormGroup;
}

describe('GatewaysComponent', () => {
  let component: GatewaysComponent;
  let fixture: ComponentFixture<GatewaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewaysComponent, FormGwComponent, FormStubComponent],
      imports: [RouterTestingModule, NgbModule.forRoot()],
      providers: [GatewaysService, MemClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
