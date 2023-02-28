import { StyleSheet, Text, View } from 'react-native';

import AddItem from './components/AddItem.js'
import Index from './components/Lista/Index.js'
import ModalItem from './components/Modal.js'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  const [ itemsList , setItemsList ] = useState([])
  const [ itemText, setItemText ] = useState('')
  const [ modalVisible , setModalVisible ] = useState(false)
  const [ itemSelected , setItemSelected ] = useState({})

  const onHandlerChangeText = (e) => setItemText(e)

  const addItem = () =>{
    const nuevoObj = {id: Math.random().toString(), value: itemText, state: false}
    setItemsList( [ ...itemsList, nuevoObj])
    setItemText('')
  }

  const onHandlerModal = (id) => {
    setItemSelected(itemsList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const closeModal = () => {
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerDelete = () => {
    setItemsList(currentItems => currentItems.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  return (
    
    <View style={styles.screen}>

    <ModalItem Delete={onHandlerDelete} Close={closeModal} Visible={modalVisible} Item={itemSelected} />

    <AddItem Add={addItem} ChangeText={onHandlerChangeText} Text={itemText} />

    <Index Lista={itemsList} OpenModal={onHandlerModal} />

    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});