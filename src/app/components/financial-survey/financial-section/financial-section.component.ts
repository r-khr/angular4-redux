import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FinancialItem } from '../../../models/financial-item';
import  financialType  from '../../../models/financial-type';

@Component({
  selector: 'app-financial-section',
  templateUrl: './financial-section.component.html',
  styleUrls: ['./financial-section.component.css']
})
export class FinancialSectionComponent implements OnInit {
  @Input() name: string;
  @Input() collection: FinancialItem[] = [];
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  typeOptions = [
    {
      value: 'none',
      label: 'None'
    },
    {
      value: 'asset',
      label: 'Asset'
    },
    {
      value: 'liability',
      label: 'Liability'
    },
    {
      value: 'income',
      label: 'Income'
    },
    {
      value: 'expense',
      label: 'Expense'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    this.add.emit(new FinancialItem());
  }

  updateItem(value: any, type: financialType, index: number) {
    this.update.emit({index, type, value});
  }

  deleteItem(index: number) {
    this.delete.emit(index);
  }
}
