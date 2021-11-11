/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormPagoComponent } from './formPago.component';

describe('FormPagoComponent', () => {
  let component: FormPagoComponent;
  let fixture: ComponentFixture<FormPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
