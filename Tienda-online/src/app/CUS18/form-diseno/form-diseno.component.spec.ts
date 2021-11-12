import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisenoComponent } from './form-diseno.component';

describe('FormDisenoComponent', () => {
  let component: FormDisenoComponent;
  let fixture: ComponentFixture<FormDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
