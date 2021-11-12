import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoCostoComponent } from './calculo-costo.component';

describe('CalculoCostoComponent', () => {
  let component: CalculoCostoComponent;
  let fixture: ComponentFixture<CalculoCostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoCostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
