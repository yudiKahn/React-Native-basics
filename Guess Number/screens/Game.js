import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Card from '../components/Card';
import History from '../components/History';
import colors from '../constants/colors';
import {Ionicons} from '@expo/vector-icons'
import Btn from '../components/Btn';

const Game = ({exclude, onEnd}) => {
    const [gusNum, setGusNum] = useState(genRndBtwn(0,99));
    const [history, setHistory] = useState([]);
    const [round, setRound] = useState(0);
    const highestNum = useRef(100);
    const lowestNum  = useRef(0);

    /**
     * @param {"lower"|"higher"} str
     */
    const nextGuess = (str) => {
        if((str === "lower" && gusNum < exclude)||
            (str==="higher" && gusNum > exclude)){
                Alert.alert('Don\'t Lie', 
                'you input wrong answer',[{
                    text:'Sorry', style:'cancel'
                }])
        } else {
            str==="lower" ? highestNum.current = gusNum : lowestNum.current = gusNum;
            let n = genRndBtwn(lowestNum.current, highestNum.current);
            while(history.indexOf(n) > -1)
                n = genRndBtwn(lowestNum.current, highestNum.current);
            setGusNum(n);
            setHistory([gusNum, ...history]);
            if(n === exclude)
                return setTimeout(()=>onEnd(round+1), 500);
            setRound(round+1);
        }      
    }

    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.title}>Computer Guess</Text>
                <View style={styles.num}>
                    <Text style={{fontSize:20, fontWeight:'700',color:colors.secend}}>
                        {gusNum}
                    </Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.btn}>
                        <Btn theme="secend" onClick={nextGuess.bind(this, "lower")}>
                            <Ionicons name="md-remove"/>
                        </Btn>
                    </View>
                    <View style={styles.btn}>
                        <Btn theme="primary" onClick={nextGuess.bind(this, "higher")}>
                            <Ionicons name="md-add"/>
                        </Btn>
                    </View>
                </View>
            </Card>
            <History items={history}/>
        </View>
    )
}

export default Game

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },  
    title:{
        fontSize:20,
        fontWeight:'700'
    },
    btn:{
        width:80
    },
    row:{
        flexDirection:'row-reverse',
        width:190,
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    num:{
        borderColor:colors.secend, 
        borderWidth:2,
        borderRadius:20, 
        height:40, 
        marginVertical:15, 
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5
    },
    card:{
        paddingHorizontal:10,
        alignItems:'center',
        width:'90%',
        maxWidth:300,
        marginVertical:5
    }
});


/**
 * @description Function that return an intenger between min and max (not including max)
 * @returns {Number}
 */
function genRndBtwn(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

/**
 * @returns {[string, Number]} Array with description and guess number
 * @param {Number} step 
 * @param {[Number]} oldGusses
 * @param {"lower"|"higher"} dir
 */
function rndGusNum(step, oldGusses, dir){
    let res = [];
    let n = 0;
    switch(step){
        case 1:
            n = genRndBtwn(1,3);
            if(n===1) res = ["Generating rnd btwn 20-30", genRndBtwn(20,30)];
            else res = ["Generating rnd btwn 70-80", genRndBtwn(70,80)];
            break;
        case 2:
            if(oldGusses[0] < 50){
                if(dir === "higher"){
                    res = [`Generating rnd btwn ${oldGusses[0]+1}-50`, genRndBtwn(oldGusses[0]+1,51)];
                } else {
                    res = [`Generating rnd btwn 0-${oldGusses[0]}`, genRndBtwn(0,oldGusses[0])];
                }
            } else {
                if(dir === "higher"){
                    res = [`Generating rnd btwn ${oldGusses[0]+1}-100`, genRndBtwn(oldGusses[0]+1,100)];
                } else {
                    res = [`Generating rnd btwn 50-${oldGusses[0]}`, genRndBtwn(50,oldGusses[0])];
                }
            }
            break;
    }
    return res;
}