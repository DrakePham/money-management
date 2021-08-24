import React from 'react';

import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(props.date);
    const day = props.date.getDate();
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-dat__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;