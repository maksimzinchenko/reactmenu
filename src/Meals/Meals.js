import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
// import RecommendedMeals from "./RecommendedMeals";

const Meals = props => {
    return (
        <Fragment>
            <AvailableMeals />
            {/* <RecommendedMeals /> */}
        </Fragment>
    );
}

export default Meals;