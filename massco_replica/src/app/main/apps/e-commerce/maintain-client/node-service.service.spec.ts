import { TestBed, inject } from '@angular/core/testing';

import { NodeService } from './node-service.service';

describe('NodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeService]
    });
  });

  it('should be created', inject([NodeService], (service: NodeService) => {
    expect(service).toBeTruthy();
  }));
});
