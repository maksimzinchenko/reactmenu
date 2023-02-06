import { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';



const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const amountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountNumber);
    }

    return (
        <form className={classes.orderControls} onSubmit={submitHandler}>
            <button className={`${classes.addMeal} ${classes.cartControl}`}>ADD</button>{!amountIsValid && <p>Amount is invalid (1-5)</p>}
            <Input ref={amountInputRef} label="" autohide={false} input={{id: 2, type: "number", min: 1, max: 5, step: 1, defaultValue: 1}}/>
            {/* <button className={`${itemsCount > 0? '' : classes.hidden} ${classes.subMeal} ${classes.cartControl}`}>ADD</button> */}
        </form>
    );
}

export default MealItemForm;