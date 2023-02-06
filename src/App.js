import React, { Fragment, useState } from "react";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

import classes from './App.module.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = event => {
    setCartIsShown(true);
  }


  const hideCartHandler = event => {
    setCartIsShown(false);
  }



  return (
    <Fragment>
      {cartIsShown && <Cart onHideCartHandler={hideCartHandler} />}
      <Header onShowCartHandler={showCartHandler} />
      <main className={classes.some}>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
