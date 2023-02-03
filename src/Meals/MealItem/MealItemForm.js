import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const itemsCount = 0;
    if (itemsCount === 0){

    }

    return (
        <form className={classes.orderControls}>
            <button className={`${classes.addMeal} ${classes.cartControl}`}>ADD</button>
            <Input label="" autohide={true} input={{id: 2, type: "number", min: 0, max: 20, step: 1, defaultValue: 0}}/>
            {/* <button className={`${itemsCount > 0? '' : classes.hidden} ${classes.subMeal} ${classes.cartControl}`}>ADD</button> */}
        </form>
    );
}

export default MealItemForm;