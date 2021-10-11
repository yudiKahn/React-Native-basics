import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            {
                typeof title === "string" ?
                <Text style={styles.title}>{title}</Text>
                :
                title
            }
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'black',
        fontSize:18,
        fontFamily:'open-sans-bold'
    }
});