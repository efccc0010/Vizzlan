import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstadoProduccionComponent } from './visualizar-estado-produccion.component';

describe('VisualizarEstadoProduccionComponent', () => {
  let component: VisualizarEstadoProduccionComponent;
  let fixture: ComponentFixture<VisualizarEstadoProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEstadoProduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEstadoProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
