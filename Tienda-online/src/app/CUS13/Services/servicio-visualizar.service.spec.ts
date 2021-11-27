import { TestBed } from '@angular/core/testing';

import { ServicioVisualizarService } from './servicio-visualizar.service';

describe('ServicioVisualizarService', () => {
  let service: ServicioVisualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVisualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
