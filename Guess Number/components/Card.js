import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({style, ...props}) => {
    return (
        <View style={[styles.card, style]}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{
            width:0, height:2
        },
        shadowRadius:6,
        shadowOpacity:.26,
        backgroundColor:'white',
        elevation:10,
        paddingVertical:15,
        borderRadius:20
    }
});
