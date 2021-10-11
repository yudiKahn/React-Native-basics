import React from 'react';
import * as EL from 'react-native';
import styles from '../files/styles';
import {useNavigation} from '@react-navigation/native';

export default function Btn({txt, navTo}) {
    const [func] = React.useState(useNavigation());
    
    return (<EL.TouchableOpacity style={styles.btn} onPress={()=>func.navigate(navTo)}>
        <EL.Text style={{color:'white',textAlign:"center",fontWeight:"bold"}}>{txt}</EL.Text>
    </EL.TouchableOpacity>)
}