import {useLayoutEffect} from "react";

import {CATEGORIES, MEALS} from '../data/dummy-data';

import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {
            return category.id === catId;
        }).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <MealList items={displayedMeals}/>;
}

export default MealsOverviewScreen;

