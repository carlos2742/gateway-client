import { TestBed, inject } from '@angular/core/testing';

import { DevicesService } from './devices.service';
import {MemClientService} from './mem-client.service';

describe('DevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesService, MemClientService]
    });
  });

  it('should be created', inject([DevicesService], (service: DevicesService) => {
    expect(service).toBeTruthy();
  }));
});
