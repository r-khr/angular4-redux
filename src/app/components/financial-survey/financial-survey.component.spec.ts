import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSurveyComponent } from './financial-survey.component';

describe('FinancialSurveyComponent', () => {
  let component: FinancialSurveyComponent;
  let fixture: ComponentFixture<FinancialSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
