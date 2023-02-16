import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Item de lista...' style={styles.input} />
        <Button title='ADD' />
      </View>
      <View>
        
        <View style={styles.containerItem}>
          <Text style={{color:'white'}}>Item de lista</Text>
          <Button title='X' />
        </View>
        <View style={styles.containerItem}>
          <Text style={{color:'white'}}>Item de lista</Text>
          <Button title='X' />
        </View>
        <View style={styles.containerItem}>
          <Text style={{color:'white'}}>Item de lista</Text>
          <Button title='X' />
        </View>
        <View style={styles.containerItem}>
          <Text style={{color:'white'}}>Item de lista</Text>
          <Button title='X' />
        </View>

      </View>
      <View style={styles.containerModal} >
        <Text style={{color:'white'}} >Quieres eliminar este item?</Text>
        <Button title='Remove'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  containerItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    backgroundColor: 'grey'
  },
  containerModal: {
    justifyContent:'space-evenly',
    alignItems: 'center',
    margin: 10,
    width: 200,
    height: 200,
    backgroundColor: 'grey',
  }
});