import React from 'react';
import {Text, View, CheckBox, TouchableOpacity, Pressable}  from 'react-native';

export default function TaskItems({allTasks, changeTaskDone, deleteTask, styles}) {
    return (<View  style={{flex:1, alignItems:'center',padding:40}}>
    {
      allTasks.map((t,i)=>(<TouchableOpacity activeOpacity={0.5} onPress={() => changeTaskDone(t)}
      key={i} style={{...styles.container, ...styles.task, backgroundColor:t.done ? 'rgb(33, 150, 243)':'red'}}>
        <CheckBox value={t.done} onValueChange={() => changeTaskDone(t)}/>
        <Text style={{margin:10,color:'white'}}>{t.task}</Text>
        <Pressable color={t.done ? 'rgb(33, 150, 243)':'red'} onPress={()=>deleteTask(t.id)} style={styles.del}>
            <Text style={{color:'#fff',textAlign:'center',marginTop:2}}>X</Text>
        </Pressable>
      </TouchableOpacity>))
    }
    </View>)
}
