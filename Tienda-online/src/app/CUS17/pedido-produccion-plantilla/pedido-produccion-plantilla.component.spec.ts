import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProduccionPlantillaComponent } from './pedido-produccion-plantilla.component';

describe('PedidoProduccionPlantillaComponent', () => {
  let component: PedidoProduccionPlantillaComponent;
  let fixture: ComponentFixture<PedidoProduccionPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProduccionPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProduccionPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
