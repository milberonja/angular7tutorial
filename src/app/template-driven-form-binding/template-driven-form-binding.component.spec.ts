import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormBindingComponent } from './template-driven-form-binding.component';

describe('TemplateDrivenFormBindingComponent', () => {
  let component: TemplateDrivenFormBindingComponent;
  let fixture: ComponentFixture<TemplateDrivenFormBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
