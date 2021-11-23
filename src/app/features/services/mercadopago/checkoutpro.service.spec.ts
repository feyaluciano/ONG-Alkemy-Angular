import { TestBed } from '@angular/core/testing';

import { CheckoutproService } from './checkoutpro.service';

describe('CheckoutproService', () => {
  let service: CheckoutproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
