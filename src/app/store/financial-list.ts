import { FinancialItem } from '../models/financial-item';
import uuidv4 from 'uuid/v4';

const defaultState: FinancialItem[] = [
    {
        uuid: uuidv4(),
        name: 'Cash',
        value: 1000,
        type: 'asset'
    },
    {
        uuid: uuidv4(),
        name: 'Credit',
        value: 300,
        type: 'liability'
    },
    {
        uuid: uuidv4(),
        name: 'Home',
        value: 30000,
        type: 'asset'
    },
    {
        uuid: uuidv4(),
        name: 'Job',
        value: 1500,
        type: 'income'
    }
];


export function financialListReducer (state: FinancialItem[] = defaultState, action){
    switch(action.type){
        case 'ADD_FINANCIAL_LIST_ITEM':
            return state.concat(action.payload);
        case 'UPDATE_FINANCIAL_LIST_ITEM':
            state.map(i => {
                if(i.uuid === action.payload.uuid){
                    return action.payload;
                }
                return i;
            });
            return state;
        case 'DELETE_FINANCIAL_LIST_ITEM':
            state.splice(action.payload, 1);
            return state;
        default: 
            return state;
    }
}