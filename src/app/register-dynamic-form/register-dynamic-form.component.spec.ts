import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDynamicFormComponent } from './register-dynamic-form.component';

describe('RegisterDynamicFormComponent', () => {
  let component: RegisterDynamicFormComponent;
  let fixture: ComponentFixture<RegisterDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
