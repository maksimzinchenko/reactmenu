import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

import CartContext from '../store/cart-context';

const HeaderCartButton = props => {

    const [buttonBumbed, setButtonBumbed] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    useEffect(()=> {
        if (items.length === 0){
            return;
        }

        setButtonBumbed(true);

        const resetBumpTimer = setTimeout(()=>{
            setButtonBumbed(false);
        }, 300)
        return ()=> {
           clearTimeout(resetBumpTimer);
        }
    }, [items]);


    const numberOfItems = cartCtx.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount
    }, 0);

    const buttonClasses = `${classes.buttonmain} ${buttonBumbed ? classes.bump : ''}`;

    
    return <button className={buttonClasses} onClick={props.onShowCartHandler}> 
        <span><CartIcon /></span>
        <span className={classes.buttonTitle}>Cart</span>
        <span className={classes.cartItemsCounter}>{numberOfItems}</span>
    </button>
}

export default HeaderCartButton;