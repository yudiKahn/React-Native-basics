import React, {useState} from 'react';
import {StyleSheet, ScrollView, Alert, View, Text}  from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItems from './components/TaskItems';


export default function App() {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [id, setId] = useState(0);

  const addNewTask = () => {
    if(task.length>0){
      setAllTasks([...allTasks, {task, id, done: false}]);
      setId(id+1);
      setTask('');
    } else {
      Alert.alert("Error !","Please Enter A Title");
    }
  }

  const deleteTask = id => setAllTasks(allTasks.filter((v)=>v.id!==id));

  const changeTaskDone = t => setAllTasks(allTasks.map(v => v.id === t.id ? {task:t.task, id:t.id, done: !t.done} : v));

  return (<ScrollView>
      <View style={styles.nav}>
         <Text style={{top:40, color:'#fff',textAlign:'center', fontSize:30}}>MY TODO'S</Text>
      </View>
      <TaskInput addNewTask={addNewTask} task={task} setTask={setTask} styles={styles}/>
      <TaskItems allTasks={allTasks} changeTaskDone={changeTaskDone} deleteTask={deleteTask} styles={styles}/>
  </ScrollView>);
}

const styles = StyleSheet.create({
  del:{
    position:'absolute',height:30,width:30, 
    right:-15, top:-15,borderRadius:20,borderColor:'white',borderWidth:3,
    backgroundColor:'red'
  },
  nav: {
    position:'relative',
    height:80, backgroundColor:'rgb(33, 150, 243)',
    
  },  
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    position:'relative'
  },
  btn: {
    backgroundColor:'rgb(33, 150, 243)',
    padding:8,
    borderRadius:20,
    position:'relative'
  },
  task:{
    shadowColor: "#000",padding:20,borderRadius:20,
    shadowOffset: {width: 0, height: 12,}, shadowOpacity: 0.58,shadowRadius: 16.00,elevation: 24
  },
  input: {
    marginLeft:10,
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius:20,
    width:200,
    height:35,
    paddingRight:10
  }
});
