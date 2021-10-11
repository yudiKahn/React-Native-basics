import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from '../constants/colors';

/**
 * @param {{theme:"primary"|"secend", onClick:(event)=>void}} props
 */
const Btn = ({children, theme, style, onClick}) => {
    const bg = colors[theme] || colors.primary;
    return (<TouchableOpacity onPress={onClick}>
        <View style={[styles.btn, {backgroundColor:bg}]}>
            <Text style={styles.txt}>
                {children}
            </Text>
        </View>
    </TouchableOpacity>);
}

export default Btn;

const styles = StyleSheet.create({ 
    btn:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        paddingVertical:7,
        paddingHorizontal:15,
        height:30
    },
    txt:{
       color:'white',
       fontFamily:'open-sans-bold',
    }
})
