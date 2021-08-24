import React, { useState } from 'react';


import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './Expense.css'

const Expense = (props) => {


    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    // let expensesContent  = <p>No Expense Found</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expenses) => (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem>))
    // }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {expensesContent} */}
            <ExpenseChart expenses = {filteredExpenses}></ExpenseChart>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}

export default Expense;