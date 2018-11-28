import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAndFormBuilderComponent } from './reactive-form-and-form-builder.component';

describe('ReactiveFormAndFormBuilderComponent', () => {
  let component: ReactiveFormAndFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormAndFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAndFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAndFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
