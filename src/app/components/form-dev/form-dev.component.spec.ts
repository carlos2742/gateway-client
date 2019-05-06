import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDevComponent } from './form-dev.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DevicesService} from '../../services/devices.service';
import {GatewaysService} from '../../services/gateways.service';
import {MemClientService} from '../../services/mem-client.service';

describe('FormDevComponent', () => {
  let component: FormDevComponent;
  let fixture: ComponentFixture<FormDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevComponent ],
      imports: [ReactiveFormsModule],
      providers: [DevicesService, GatewaysService, MemClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevComponent);
    component = fixture.componentInstance;
    component.params = {'gwId': 'g8j6g5h74j2h'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get gwId from @input params', () => {
    expect(component.gwId).toBe('g8j6g5h74j2h');
  });
});
