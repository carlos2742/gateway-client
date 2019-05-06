import { TestBed, inject } from '@angular/core/testing';

import { GatewaysService } from './gateways.service';
import {MemClientService} from './mem-client.service';

describe('GatewaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatewaysService, MemClientService]
    });
  });

  it('should be created', inject([GatewaysService], (service: GatewaysService) => {
    expect(service).toBeTruthy();
  }));
});
