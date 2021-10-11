import React from 'react';
import { View, Text } from 'react-native';
import styleSheet from '../../styles';
import {useSelector} from 'react-redux';
import P from '../../components/P'
import Btn from '../../components/Btn';
import { FlatList } from 'react-native-gesture-handler';
import MealTouchable from '../../components/MealTouchable';

const Home = ({navigation}) => {
    const {favs, meals} = useSelector(s=>({favs:s.meals.favorites,meals:s.meals.meals}));

    return favs.length > 0 ? (<FlatList
        data={meals}
        keyExtractor={(v,i)=>i.toString()}
        renderItem={({item})=> favs.indexOf(item.id) >= 0 ? 
            <MealTouchable meal={item} onClick={()=>navigation.navigate('Meal Details', {meal:item})}/> : null}
    />) : (<View style={[styleSheet.screen,{justifyContent:'center',alignItems:'center'}]}>
        <P bold>No Favorites Recipes Found !</P>
        <Btn style={{marginVertical:10}} onClick={()=>navigation.navigate('Meals')}>
            Go Back To Meals
        </Btn>
    </View>)
}

export default Home
