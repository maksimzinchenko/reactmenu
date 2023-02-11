import React from "react";

import classes from './AddMealButton.module.css';

const AddMealButton = props => {

    const addMealHandler = event => {
        props.onShowAddMealFormHandler(true);
    }

    return <button onClick={addMealHandler} className={classes.addMealButton}><span className={classes.buttonTitle}>Add meal</span></button>
;
}

export default AddMealButton;