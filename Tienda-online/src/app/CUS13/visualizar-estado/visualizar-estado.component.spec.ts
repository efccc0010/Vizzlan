import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstadoComponent } from './visualizar-estado.component';

describe('VisualizarEstadoComponent', () => {
  let component: VisualizarEstadoComponent;
  let fixture: ComponentFixture<VisualizarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
