import { Component, OnInit } from '@angular/core';
import { FinancialItem } from '../../models/financial-item';
import FinancialType from '../../models/financial-type';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-survey',
  templateUrl: './financial-survey.component.html',
  styleUrls: ['./financial-survey.component.css']
})
export class FinancialSurveyComponent implements OnInit {
  financialItems: FinancialItem[] = [];

  constructor(private store : Store<any>,
              private router: Router) { 
      this.store.select('financialList')
      .subscribe((result : FinancialItem[]) => {
        this.financialItems = result;
      })
  }

  ngOnInit() {
  }

  onAddFinancialItem(financialItem: FinancialItem){
    this.store.dispatch({
      type: 'ADD_FINANCIAL_LIST_ITEM',
      payload: financialItem
    });
  }

  onUpdateFinancialItem(financialItem: FinancialItem) {
    this.store.dispatch({
      type: 'UPDATE_FINANCIAL_LIST_ITEM',
      payload: financialItem
    });
  }
  
  onDeleteFinancialItem(financialItemIndex: number) {
    this.store.dispatch({
      type: 'DELETE_FINANCIAL_LIST_ITEM',
      payload: financialItemIndex
    });
  }

}
