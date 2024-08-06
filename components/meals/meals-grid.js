import classes from "./meals-grid.module.css"
import MealItem from "./meal-item";


const MealsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {meals.map(item => <li key={item.id}>
                <MealItem {...item}/>
            </li>)}
        </ul>
    );
}

export default MealsGrid;