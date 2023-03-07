import { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading';
import PasswordGenerator from './components/PasswordGenerator.js';
import { StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList.js'
import { useFonts } from 'expo-font';

export default function App() {

  
  const [ toDoList, setToDoList ] = useState(true)
  
  function changeToPasswordGenerator() {
    setToDoList(!toDoList);
  }
  
  const [loaded] = useFonts({
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
  });
  if (!loaded) return <AppLoading/>

  return (
    
    toDoList
    ?
    <ToDoList switchScreen={changeToPasswordGenerator} />
    :
    <PasswordGenerator switchScreen={changeToPasswordGenerator} />

  );
}

const styles = StyleSheet.create({});