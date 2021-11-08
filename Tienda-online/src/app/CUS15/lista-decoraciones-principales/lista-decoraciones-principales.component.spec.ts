import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDecoracionesPrincipalesComponent } from './lista-decoraciones-principales.component';

describe('ListaDecoracionesPrincipalesComponent', () => {
  let component: ListaDecoracionesPrincipalesComponent;
  let fixture: ComponentFixture<ListaDecoracionesPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDecoracionesPrincipalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDecoracionesPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
