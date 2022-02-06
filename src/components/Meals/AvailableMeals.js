import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: "Mama's Paratha",
    description: 'Made with perfectly meshed potatoes and cheese',
    price: 75,
  },
  {
    id: 'm2',
    name: 'Shankar ki Kachodi',
    description: 'A Rajasthani specialty!',
    price: 30,
  },
  {
    id: 'm3',
    name: 'Cold Coffee',
    description: 'Perfect blend of finest coffe from Ghana',
    price: 149,
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Healthy...and green...',
    price: 49,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;