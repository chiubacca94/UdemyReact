import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate/ExpenseDate'; 

// props is the only one parameter that will hve all info passed in (key value pairs of attribute and value)
function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate 
               title={props.title}
               amount={props.amount}
               date={props.date}  
            /> 
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

// Need to export so it can be used by other files.
export default ExpenseItem;