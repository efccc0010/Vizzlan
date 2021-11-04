import { TestBed } from '@angular/core/testing';

import { ServicioDatoLoginService } from './servicio-dato-login.service';

describe('ServicioDatoLoginService', () => {
  let service: ServicioDatoLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatoLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
