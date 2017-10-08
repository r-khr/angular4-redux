import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSectionComponent } from './financial-section.component';

describe('FinancialSectionComponent', () => {
  let component: FinancialSectionComponent;
  let fixture: ComponentFixture<FinancialSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
