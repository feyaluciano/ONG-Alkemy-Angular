/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivateBackofficeService } from './private-backoffice.service';

describe('Service: PrivateBackoffice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateBackofficeService]
    });
  });

  it('should ...', inject([PrivateBackofficeService], (service: PrivateBackofficeService) => {
    expect(service).toBeTruthy();
  }));
});
