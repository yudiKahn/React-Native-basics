import React from 'react'
import { View, Text, StyleSheet, BackHandler, Alert } from 'react-native'
import Btn from '../components/Btn';

const End = ({rounds, number, playAgain}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.box}>
                <Text style={styles.txt}>Game Over !</Text>
                <Text style={styles.txt}>Number of rounds :{rounds}</Text>
                <Text style={styles.txt}>Selected Number :{number}</Text>
                <View style={styles.row}>
                <Btn theme="primary" onClick={playAgain}>PLAY AGAIN</Btn>
                <Btn theme="secend" onClick={()=>{
                    Alert.alert("Bye Bye !","Sorry to see you leave")
                    setTimeout(BackHandler.exitApp,900)
                }}>EXIT</Btn>
                </View>
            </View>
        </View>
    )
}

export default End;

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-around'
    },
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:'90%', 
        alignItems:'center',
        marginVertical:5
    },
    txt:{
        fontSize:17,
        marginBottom:6,
        fontFamily:'open-sans'
    }
})
