import { TestBed, inject } from '@angular/core/testing';

import { CbocService } from './cboc.service';

describe('CbocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CbocService]
    });
  });

  it('should be created', inject([CbocService], (service: CbocService) => {
    expect(service).toBeTruthy();
  }));
});
