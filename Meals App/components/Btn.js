import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import P from './P';
import styles from '../styles';

/**
 * @param {{
 *  bold:boolean,
 *  style:import('react-native').StyleProp<import('react-native').ViewStyle>,
 *  theme:"primary"|"secondary",
 *  onClick:function
 * }} props
 */
const Btn = ({children, onClick, bold, style, theme}) => (<TouchableOpacity onPress={onClick}>
    <View style={[styles.btn,theme==="secondary"?styles.bgSec:styles.bgPrimary, style]}>
    {
        typeof children === "string" ? <P bold={bold} 
            style={[theme==="secondary"?styles.cPrimary:styles.cSec]}>{children}</P> : children
    }
    </View>
</TouchableOpacity>)

export default Btn
