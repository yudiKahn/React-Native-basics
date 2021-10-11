import React from 'react';
import * as EL from 'react-native';
import styles from '../files/styles';
import path from '../files/path';

function AllQuotes() {
    const quotes = path.map(obj => obj.quotes)
    
    return (<EL.ScrollView>
        <EL.View style={{width: styles.img.width,marginLeft:'auto',marginRight:'auto'}}>
            {
                quotes.map((arr,i1)=> arr.map((v,i2) => <EL.Image key={Number(`${i1}${i2}`)} source={v} style={styles.img}/>))
            }
        </EL.View>
    </EL.ScrollView>)
}

export default  AllQuotes;