import { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

import CartContext from '../store/cart-context';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount
    }, 0);

    return <button className={classes.buttonmain} onClick={props.onShowCartHandler}> 
        <span><CartIcon /></span>
        <span className={classes.buttonTitle}>Cart</span>
        <span className={classes.cartItemsCounter}>{numberOfItems}</span>
    </button>
}

export default HeaderCartButton;