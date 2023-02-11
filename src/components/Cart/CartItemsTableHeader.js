import React from 'react';
import classes from './CartItemsTableHeader.module.css';

export default function CartItemsTableHeader(props) {
  return (
    <li className={classes.cartItemHeader}>
        <h2 className={classes.itemTitle}>Item</h2>
        {/* <span className={classes.price}>Price</span> */}
        <span className={classes.price}>Amount</span>
    </li>
  )
}
