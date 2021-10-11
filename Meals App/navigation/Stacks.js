import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../styles';
import Categories from '../screens/Meals/Categories';
import CategoryMeals from '../screens/Meals/CategoryMeals';
import MealDetails from '../screens/Meals/MealDetails';
import Home from '../screens/Favorites/Home';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import {ToggleIsFavorite} from '../redux/actions';

const MealsStack = createNativeStackNavigator();
const Meals = () => {
  const favs = useSelector(s=>s.meals.favorites);
  const dispatch = useDispatch();

  return (
    <MealsStack.Navigator screenOptions={({navigation})=>({
        headerStyle:{
            backgroundColor:styles.bgPrimary.backgroundColor
        },
        headerTitleAlign:"center",
        headerTintColor:styles.bgSec.backgroundColor,
        headerTitleStyle:{
          fontFamily:styles.fontBold.fontFamily
        },
        headerLeft: ({tintColor, canGoBack})=> !canGoBack ? <TouchableOpacity onPress={navigation.toggleDrawer}>
          <Ionicons name="reorder-three" size={29} color={tintColor}/>
        </TouchableOpacity> : null
      })}
    >
      <MealsStack.Screen 
        name="Categories" 
        options={{
          title:"Recipes"
        }} 
        component={Categories}
      />
      <MealsStack.Screen 
        name="Category Meals" 
        options={({route})=>({
            title:route.params.category.title
        })}
        component={CategoryMeals}/>
      <MealsStack.Screen 
        name="Meal Details" 
        component={MealDetails}
        options={({route})=>({
            headerTitleStyle:{
              fontSize:15,
            },
            headerRight:({tintColor})=><TouchableOpacity onPress={()=>dispatch(ToggleIsFavorite(route.params.meal.id))}>
              <AntDesign name={favs.indexOf(route.params.meal.id) >= 0 ? 'star':'staro'} size={19} color={tintColor}/>
            </TouchableOpacity>,
            headerTitle:()=> <View style={{flex:1,justifyContent: "center",alignItems: "center",maxWidth:Dimensions.get('window').width/1.5}}>
              <Text 
                numberOfLines={1} 
                lineBreakMode="middle"
                style={[styles.cSec, styles.fontBold]}>
                {route.params.meal.title}
              </Text>
            </View>
        })}
      />
    </MealsStack.Navigator>);
}

const FavoritesStack = createNativeStackNavigator();
const Favorites = () => (<FavoritesStack.Navigator screenOptions={({navigation})=>({
        headerStyle:{
            backgroundColor:styles.bgPrimary.backgroundColor
        },
        headerTitleAlign:"center",
        headerTintColor:styles.bgSec.backgroundColor,
        headerTitleStyle:{
          fontFamily:styles.fontBold.fontFamily
        },
        headerLeft: ({tintColor, canGoBack})=> !canGoBack ? <TouchableOpacity onPress={navigation.toggleDrawer}>
          <Ionicons name="reorder-three" size={29} color={tintColor}/>
        </TouchableOpacity> : null
    })}>
        <FavoritesStack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"Favorites"
          }}
        />
    </FavoritesStack.Navigator>);

export {
    Meals, Favorites
}