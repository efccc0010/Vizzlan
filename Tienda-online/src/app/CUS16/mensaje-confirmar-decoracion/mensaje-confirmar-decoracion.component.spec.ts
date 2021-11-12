import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeConfirmarDecoracionComponent } from './mensaje-confirmar-decoracion.component';

describe('MensajeConfirmarDecoracionComponent', () => {
  let component: MensajeConfirmarDecoracionComponent;
  let fixture: ComponentFixture<MensajeConfirmarDecoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeConfirmarDecoracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeConfirmarDecoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
