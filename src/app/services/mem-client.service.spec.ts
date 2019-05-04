import { TestBed, inject } from '@angular/core/testing';

import { MemClientService } from './mem-client.service';

describe('MemClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemClientService]
    });
  });

  it('should be created', inject([MemClientService], (service: MemClientService) => {
    expect(service).toBeTruthy();
  }));
});
