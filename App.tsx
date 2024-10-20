//importar react

//importar react desde react

import React,{useState,useEffect} from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';
import styles from "./Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from "./RenderItem";
import { title } from "process";

export interface Task {
  title: String;
  done: boolean;
  date: Date;
}


export default function App() {
  //usando useState
  const[text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value : Task[]) => {
    try {
      await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodo-tasks');
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect( () => {
    getData();
  },[])

  const addTask = () => {
    const tmp = [...tasks];
    const newTask ={
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
    setText('');
  };
  const markDone = (task: Task) => {
    const tmp = [...tasks];
    //comparando el titulo de la tarea  con el de el titulo de todas las tareas
    const index = tmp.findIndex(el => el.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
  };
  
  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Agregar una nueva tarea" 
          style={styles.textInput} 
          value={text}
          //listenr onChangeText
          onChangeText={(t: string) => setText(t)}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <FlatList
          //elemento fundamental
          renderItem={({item}) => (
            <RenderItem item={item} deleteFunction={deleteFunction} markDone={markDone}/>
          )} 
          data={tasks}

        />
      </View>
    </View>
  );
}