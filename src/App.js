import React, { Fragment } from "react";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

import classes from './App.module.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
