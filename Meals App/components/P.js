import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles';

/**
 * @param {{
 *  bold:boolean, 
 *  style:import('react-native').StyleProp<import('react-native').TextStyle>
 * }} props
*/
const P = ({bold,children,style}) => <Text style={[styles[bold?'fontBold':'font'], style]}>{children}</Text>;

export default P
