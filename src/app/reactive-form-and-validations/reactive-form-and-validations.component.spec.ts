import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAndValidationsComponent } from './reactive-form-and-validations.component';

describe('ReactiveFormAndValidationsComponent', () => {
  let component: ReactiveFormAndValidationsComponent;
  let fixture: ComponentFixture<ReactiveFormAndValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAndValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAndValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
