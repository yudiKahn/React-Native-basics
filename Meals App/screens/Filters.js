import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, Switch, Alert } from 'react-native'
import styles from '../styles'
import P from '../components/P';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';


const Filters = ({navigation}) => {
    const filters = useSelector(s=>s.meals.filters);
    const [state, setState] = useState(filters);
    const firstState = useRef(state);

    useEffect(()=>{
        navigation.setParams({filters:state});
    },[state]);

    useFocusEffect(useCallback(()=>()=>{
        compareObjects(filters, firstState.current) && setState(filters);
    },[]));

    return (
        <View style={[styles.screen]}>
        {
            Object.keys(state).sort().map((v,i)=>
            <View 
                style={[styles.row,{justifyContent:'space-between',padding:10}]} 
                key={i.toString()}
            >
                <P bold>{formatFilterTxt(v)}</P>
                <Switch 
                    value={state[v]} 
                    onValueChange={()=>setState({...state,[v]:!state[v]})}
                    thumbColor={styles.bgPrimary.backgroundColor}
                />
            </View>)
        }
        </View>
    )
}

export default Filters

/**
 * @param {string} filterTxt 
 */
function formatFilterTxt(filterTxt){
    return filterTxt.split(/(?=[A-Z])/).filter(v=>v.toLowerCase()!=="is").join(' ');
}

/**
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns {boolean}
 */
function compareObjects(obj1, obj2){
    let res = true;
    Object.keys(obj1).forEach((key)=>{
        if(obj2[key] !== obj1[key]) res = false;
    });
    return res;
}