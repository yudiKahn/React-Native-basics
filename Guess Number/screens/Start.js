import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Platform } from 'react-native'
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const Start = ({onStart}) => {
    const [num, setNum] = useState('');
    const [output, setOutput] = useState(null);
    const onSetNum = txt => setNum(txt.replace(/[^0-9]/g,''))
    const goOn = () => {
        const n = parseInt(num);
        if(isNaN(n) || n < 0 || n > 99) 
            return Alert.alert('Error',
            'Invalid Number',
            [
                {text:"Ok",style:'destructive',
                onPress:()=>setNum('')}
            ]);
        setNum('');
        setOutput(<Card style={styles.controlBox}>
            <View>
                <Text>You Selected</Text>
                <View style={styles.num}>
                    <Text style={{fontSize:20, fontWeight:'700',color:colors.secend}}>
                    {n}    
                    </Text>
                </View>
                <Button 
                title="Start" 
                color={colors.secend} 
                onPress={()=>onStart(n)}/>
            </View>
        </Card>)
    }

    const closeKeyboard = () => (Platform.OS !== 'web') && Keyboard.dismiss()

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.controlBox}>
                <Text>Select a Number</Text>
                <Input 
                style={styles.input}
                keyboardType="numeric"
                maxLength={2}
                value={num}
                onChangeText={onSetNum}
                />
                <View style={styles.row}>
                    <View style={styles.btn}>
                        <Button 
                        color={colors.secend}
                        title="RESET"
                        onPress={()=>{
                            setNum('');
                            setOutput(null)
                        }}/>
                    </View>
                    <View style={styles.btn}>
                        <Button 
                        title="CONFIRM"
                        color={colors.primary}
                        onPress={goOn}/>
                    </View>
                </View>
            </Card>
            {output}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Start

const styles = StyleSheet.create({
    btn:{
        width:80
    },
    num:{
        borderColor:colors.secend, 
        borderWidth:2,
        borderRadius:20, 
        height:40, 
        marginVertical:5, 
        justifyContent:'center',
        alignItems:'center'
    },
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    controlBox:{
        width:'100%', 
        alignItems:'center',
        marginVertical:5
    },
    row:{
        flexDirection:'row-reverse',
        width:190,
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        marginVertical:5,
        fontWeight:'700'
    },
    input:{
        width:50,
        textAlign:'center'
    }
});