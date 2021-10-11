import React from 'react'
import {FlatList } from 'react-native'
import MealTouchable from '../../components/MealTouchable';
import { useSelector } from 'react-redux';

const CategoryMeals = ({navigation, route}) => {
    const filter = (meal) => {
        const filters = useSelector(s=>s.meals.filters);
        if(filters.isGlutenFree && !meal.isGlutenFree) return false;
        if(filters.isLactoseFree && !meal.isLactoseFree) return false;
        if(filters.isVegan && !meal.isVegan) return false;
        if(filters.isVegetarian && !meal.isVegan) return false;
        return meal.cId.indexOf(route.params.category.id) >= 0;
    }

    const meals = useSelector(s=>s.meals.meals.filter(filter));

    return (
        <FlatList
            data={meals}
            renderItem={({item})=> <MealTouchable meal={item}
             onClick={()=>navigation.navigate('Meal Details',{meal:item})}/>}
        />
    )
}

export default CategoryMeals;