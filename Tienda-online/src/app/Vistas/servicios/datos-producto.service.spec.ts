import { TestBed } from '@angular/core/testing';

import { DatosProductoService } from './datos-producto.service';

describe('DatosProductoService', () => {
  let service: DatosProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
