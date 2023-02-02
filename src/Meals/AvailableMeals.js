import classes from './AvailableMeals.module.css';

const MEALS_START = [
    {id: 1,
    name: 'Meal 1',
    description: 'Meal 1 description',
    price: 15
    },
    {id: 2,
    name: 'Meal 1',
    description: 'Meal 2 description',
    price: 10
    },
    {id: 3,
    name: 'Meal 1',
    description: 'Meal 3 description',
    price: 8
    },
    {id: 4,
    name: 'Meal 1',
    description: 'Meal 4 description',
    price: 2
    },
    {id: 5,
    name: 'Meal 1',
    description: 'Meal 5 description',
    price: 5
    },
    {id: 6,
    name: 'Meal 1',
    description: 'Meal 6 description',
    price: 25
    },
];


const AvailableMeals = () => {
    const mealsList = MEALS_START.map(meal=><li>{meal.name}</li>);

    return (
        <section>
            {mealsList}
        </section>
    );
}

export default AvailableMeals;