import { TestBed } from '@angular/core/testing';

import { SpCrmService } from './sp-crm.service';

describe('SpCrmService', () => {
  let service: SpCrmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpCrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
