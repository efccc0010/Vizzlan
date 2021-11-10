/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CUS06Component } from './CUS06.component';

describe('CUS06Component', () => {
  let component: CUS06Component;
  let fixture: ComponentFixture<CUS06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CUS06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CUS06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
