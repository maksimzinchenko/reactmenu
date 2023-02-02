import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return <button className={classes.buttonmain}>
        <span><CartIcon /></span>
        <span className={classes.buttonTitle}>Your Cart</span>
        <span className={classes.cartItemsCounter}>0</span>
    </button>
}

export default HeaderCartButton;