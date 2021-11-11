import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProduccionComponent } from './pedido-produccion.component';

describe('PedidoProduccionComponent', () => {
  let component: PedidoProduccionComponent;
  let fixture: ComponentFixture<PedidoProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
