import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import styles from '../styles';

const FavBtn = ({onClick}) => {
    return <TouchableOpacity onPress={onClick}>
        <FontAwesome5 name="star" size={19} color={styles.bgSec.backgroundColor}/>
    </TouchableOpacity>
}

export default FavBtn
