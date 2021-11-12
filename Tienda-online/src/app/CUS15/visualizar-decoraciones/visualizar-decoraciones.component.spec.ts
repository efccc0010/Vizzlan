import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDecoracionesComponent } from './visualizar-decoraciones.component';

describe('VisualizarDecoracionesComponent', () => {
  let component: VisualizarDecoracionesComponent;
  let fixture: ComponentFixture<VisualizarDecoracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDecoracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDecoracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
