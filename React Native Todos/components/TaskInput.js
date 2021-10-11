import React from 'react';
import {Pressable, Text, View, TextInput}  from 'react-native';

function TaskInput({addNewTask, task, setTask, styles}) {

    return (<View style={{...styles.container, marginTop:30}}>
        <Pressable onPress={addNewTask} style={styles.btn}>
            <Text style={{color:'white'}}>ADD</Text>
        </Pressable>
        <TextInput placeholder="New Task" style={styles.input} value={task} onChangeText={txt=>setTask(txt)}/>
    </View>)
}

export default TaskInput;