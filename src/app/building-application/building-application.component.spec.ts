import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingApplicationComponent } from './building-application.component';

describe('BuildingApplicationComponent', () => {
  let component: BuildingApplicationComponent;
  let fixture: ComponentFixture<BuildingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
