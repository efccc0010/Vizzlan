/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagarPedidoEstandarComponent } from './PagarPedidoEstandar.component';

describe('PagarPedidoEstandarComponent', () => {
  let component: PagarPedidoEstandarComponent;
  let fixture: ComponentFixture<PagarPedidoEstandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarPedidoEstandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarPedidoEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
