import { TestBed } from '@angular/core/testing';

import { PortalServiceService } from './portal-service.service';

describe('PortalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalServiceService = TestBed.get(PortalServiceService);
    expect(service).toBeTruthy();
  });
});
