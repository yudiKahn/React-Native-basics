import React from 'react'
import { View, Image, Dimensions, ScrollView } from 'react-native'
import styles from '../../styles'
import P from '../../components/P'

const MealDetails = ({navigation, route}) => {
    const {meal} = route.params;
    return (
        <View style={[styles.screen]}>
            <Image source={{uri:meal.imgUrl}} style={{width:'100%',height:Dimensions.get('window').height/3}}/>
            <View style={[styles.row, {justifyContent:'space-between',paddingHorizontal:20,paddingVertical:5}]}>
                <P bold>{meal.duration}min</P>
                <P bold>{meal.affordability}</P>
                <P bold>{meal.complexity}</P>
            </View>
            <ScrollView contentContainerStyle={styles.mealDetailsView}>
                <P bold style={{fontSize:20}}>Ingredients :</P> 
                <View style={{maxWidth:'90%',marginVertical:10}}>
                    {meal.ingredients.map((v,i)=> <P key={i.toString()}>({i+1}) - {v}</P>)}
                </View>
                <P bold style={{fontSize:20}}>Instructions :</P> 
                <View style={{maxWidth:'90%',marginVertical:10}}>
                    {meal.steps.map((v,i)=> <P key={i.toString()}>({i+1}) - {v}</P>)}
                </View>
            </ScrollView>
        </View>
    )
}

export default MealDetails
