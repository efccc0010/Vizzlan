import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstadoEspecialComponent } from './visualizar-estado-especial.component';

describe('VisualizarEstadoEspecialComponent', () => {
  let component: VisualizarEstadoEspecialComponent;
  let fixture: ComponentFixture<VisualizarEstadoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEstadoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEstadoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
