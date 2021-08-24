import React from 'react'

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {
    // let expensesContent  = <p>No Expense Found</p>;

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'> Found No Expenses.</h2>
    }
    
    return (
        <div className='expenses-list'>
            {props.items.map((expenses) => (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem>))}
        </div>
    );
};

export default ExpenseList;