import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoPersonalizadoComponent } from './diseno-personalizado.component';

describe('DisenoPersonalizadoComponent', () => {
  let component: DisenoPersonalizadoComponent;
  let fixture: ComponentFixture<DisenoPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoPersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
