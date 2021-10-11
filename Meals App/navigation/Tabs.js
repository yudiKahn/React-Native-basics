import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, FontAwesome5} from '@expo/vector-icons';
import {Meals, Favorites} from './Stacks';
import styles from '../styles';

const MealsFavsTab = createBottomTabNavigator();
const MealsFavs = () => (<MealsFavsTab.Navigator screenOptions={{
        tabBarActiveTintColor:styles.bgPrimary.backgroundColor,
        tabBarLabelStyle:{
            fontFamily:styles.fontBold.fontFamily
        },
        headerShown:false
    }}>
        <MealsFavsTab.Screen 
            name="Meals"
            component={Meals}
            options={{
                tabBarIcon: (props)=><Ionicons name="restaurant-outline" size={24} color={props.color} />
            }}
        />
        <MealsFavsTab.Screen 
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarIcon: (props)=><FontAwesome5 name="star" size={24} color={props.color}/>
            }}
        />
    </MealsFavsTab.Navigator>);

export {
    MealsFavs
}
