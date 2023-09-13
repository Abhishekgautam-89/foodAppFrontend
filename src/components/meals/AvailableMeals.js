import React from 'react'
import classes from './MealSummary.module.css'
import Addmeal from './mealItems/Addmeal';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal)=>
        <Addmeal 
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
    )
  return (
    // <section className={classes.meals} >
    <section className="w-[90%] max-w-[70%] mx-auto mt-5 mb-10 animate__animated animate__bounceInUp" >
      <Card> 
      <ul >
        {meals}
      </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
