import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSurveyComponent } from './global-survey.component';

describe('GlobalSurveyComponent', () => {
  let component: GlobalSurveyComponent;
  let fixture: ComponentFixture<GlobalSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
