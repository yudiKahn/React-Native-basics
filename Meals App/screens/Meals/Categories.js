import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from '../../styles'
import {CATEGORIES} from '../../data/dummy-data';

const Categories = (props) => {
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={({item})=> <TouchableOpacity style={[styles.categoryItem]} 
                onPress={()=>props.navigation.navigate('Category Meals',{category:item})}>
                <View>
                    <Text style={styles.font}>{item.title}</Text>
                </View>
            </TouchableOpacity>}
        />
    )
}

export default Categories
