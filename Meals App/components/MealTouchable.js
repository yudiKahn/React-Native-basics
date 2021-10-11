import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styles from '../styles';

const MealTouchable = ({meal, onClick}) => {
    return (
    <TouchableOpacity style={[styles.mealItem, styles.bgSec]} onPress={onClick}>
        <View style={[styles.row, {justifyContent:'flex-start', flex:1}]}>
            <ImageBackground source={{uri:meal.imgUrl}} style={styles.mealBgImg} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={[styles.fontBold,styles.mealTitle]}>{meal.title}</Text>
            </ImageBackground>
        </View>
        <View style={[styles.row,{justifyContent:'space-between',paddingHorizontal:15, paddingVertical:8}]}>
            <Text style={styles.font}>{meal.affordability}</Text>
            <Text style={styles.font}>{meal.complexity}</Text>
            <Text style={styles.font}>{meal.duration}min</Text>
        </View>
    </TouchableOpacity>)
}

export default MealTouchable
