/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CUS07Component } from './CUS07.component';

describe('CUS07Component', () => {
  let component: CUS07Component;
  let fixture: ComponentFixture<CUS07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CUS07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CUS07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
