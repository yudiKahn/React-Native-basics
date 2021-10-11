import React from 'react';
import * as EL from 'react-native';
import styles from '../files/styles';
import Btn from './Btn';

export default function Home() {
    return (<EL.View style={styles.container}>
    <EL.ImageBackground style={styles.bgImg} source={require("../pics/bg.jpg")}>
        <EL.Text style={styles.txtShadow}>
            Hello
        </EL.Text>
        <Btn txt="Details" navTo="Details"/>
        <Btn txt="All Quotes" navTo="AllQuotes"/>
    </EL.ImageBackground>
    </EL.View>)
}
