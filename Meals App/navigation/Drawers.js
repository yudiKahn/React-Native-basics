import React from 'react';
import {MealsFavs} from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Filters from '../screens/Filters';
import styles from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { Alert, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import {setFilter} from '../redux/actions'

const MFFDrawer = createDrawerNavigator();

const MFF = () => {
    const dispatch = useDispatch();

    return (<MFFDrawer.Navigator
        initialRouteName="App"
        screenOptions={{
            headerStyle:{
                backgroundColor:styles.bgPrimary.backgroundColor
            },
            headerTitleAlign:"center",
            headerTintColor:styles.bgSec.backgroundColor,
            headerTitleStyle:{
                fontFamily:styles.fontBold.fontFamily
            }
        }}
    >
        <MFFDrawer.Screen
            name="App"
            component={MealsFavs}
            options={{
                headerShown:false,
                title:"Meals"
            }}
        />
        <MFFDrawer.Screen
            name="Filters"
            component={Filters}
            options={({navigation,route})=>({
                headerRight:({tintColor})=>
                <TouchableOpacity 
                    onPress={()=>{
                        dispatch(setFilter(route.params.filters));
                        Alert.alert("Update","you update succefuly your filters..",[
                            {text:"Ok",style:"destructive"}
                        ]);
                    }} 
                    style={{paddingHorizontal:10}}
                >
                    <Ionicons name="checkmark" size={20} color={tintColor}/>
                </TouchableOpacity>
            })}
        />
    </MFFDrawer.Navigator>);
}

export {
    MFF
}