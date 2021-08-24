import React from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    // const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(props.date);
    // const day = props.date.getDate();
    // const year = props.date.getFullYear();

    // const [title, setTitle] = useState(props.title);
    // // let title =props.title; 
    // const clickHandler = () =>{
    //     setTitle('Updated!');
    //     // title='Updated !';
    //     console.log(title);
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Changle Title</button> */}
            </Card>
        </li>
    );
}


export default ExpenseItem;