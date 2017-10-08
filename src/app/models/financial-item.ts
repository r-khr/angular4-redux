import FinancialType from './financial-type';
import uuidv4 from 'uuid/v4';

export interface IFinancialItem {
    uuid: string;
    name: string;
    value: number;
    type: FinancialType;
}

export class FinancialItem implements IFinancialItem {
    uuid: string;
    name: string;
    value: number;
    type: FinancialType;

    constructor(uuid: string = uuidv4(), name: string = '', value: number = 0, type: FinancialType = 'none') {
        this.uuid = uuid;
        this.name = name;
        this.value = value;
        this.type = type;
    }
}