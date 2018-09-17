import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
// to use ingredients from burgerbuilder's state here as props we have to convert the ingredients object into an array to be able to loop through it. Object.keys() method will make an array out of key names
let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientObjKey) => {
        return [...Array(props.ingredients[ingredientObjKey])].map((_, i) => { return <BurgerIngredient key={ingredientObjKey + i} type={ingredientObjKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    console.log(transformedIngredients);
if (transformedIngredients.length === 0) { transformedIngredients = <p>Please, put something you like in between the buns to make your burger yummy;)</p> }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
    );
}

export default burger;