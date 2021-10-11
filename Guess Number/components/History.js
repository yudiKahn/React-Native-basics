import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'

/**
 * 
 * @param {{items:[string]}} props 
 */
const History = ({items}) => {
    return (<View style={styles.view}>
        <ScrollView contentContainerStyle={styles.list}>
            {
                items && items.map((v,i)=> <View style={styles.row} key={i.toString()}>
                    <Text>#{items.length-i}</Text><Text>{v}</Text>
                </View>)
            }
        </ScrollView>
    </View>)
}

export default History

const styles = StyleSheet.create({
    view:{
        flex:1,
        width:'90%',
        maxWidth:300,
        marginVertical:5
    },
    row:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        marginVertical:5,
        paddingVertical:5,
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    list:{
        flexGrow:1,
        justifyContent:'flex-end'
    }
})