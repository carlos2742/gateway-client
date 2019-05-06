import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayCardComponent } from './gateway-card.component';
import {FormDevComponent} from '../form-dev/form-dev.component';
import { ReactiveFormsModule} from '@angular/forms';
import {DevicesService} from '../../services/devices.service';
import {GatewaysService} from '../../services/gateways.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MemClientService} from '../../services/mem-client.service';

describe('GatewayCardComponent', () => {
  let component: GatewayCardComponent;
  let fixture: ComponentFixture<GatewayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayCardComponent, FormDevComponent],
      imports: [ ReactiveFormsModule, NgbModule.forRoot()],
      providers: [
        DevicesService,
        GatewaysService,
        MemClientService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '5e8q4e5fds'} }
          }
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive param id from url', () => {
    expect(component.gwId).toBe('5e8q4e5fds');
  });
});
