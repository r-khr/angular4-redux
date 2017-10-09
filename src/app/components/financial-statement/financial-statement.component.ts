import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FinancialItem } from '../../models/financial-item';
import FinancialType from '../../models/financial-type';

@Component({
  selector: 'app-financial-statement',
  templateUrl: './financial-statement.component.html',
  styleUrls: ['./financial-statement.component.css']
})
export class FinancialStatementComponent implements OnInit {
  financialItems: FinancialItem[] = [];
  assetValue: number = 0;
  liabilityValue: number = 0;
  incomeValue: number = 0;
  expenseValue: number = 0;

  constructor(private store: Store<any>) {
    this.store.select('financialList')
      .subscribe((result: FinancialItem[]) => {
        this.financialItems = result;
        this.assetValue = this.getTotalValue(result, 'asset');
        this.liabilityValue = this.getTotalValue(result, 'liability');
        this.incomeValue = this.getTotalValue(result, 'income');
        this.expenseValue = this.getTotalValue(result, 'expense');
      })
  }

  getTotalValue(list: FinancialItem[], type: FinancialType) {
    let mappedList = list.filter(i => i.type === type).map(i => i.value);
    if(mappedList.length > 0){
      return mappedList.reduce((a: number, b: number) => a + b);
    }
    return 0;
  }

  ngOnInit() {
  }

}
