import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({style, ...props}) => {
    return (
        <View>
            <TextInput {...props} style={[styles.input, style]}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10
    }
})