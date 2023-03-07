import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import Colors from "../../constants/colors";

const Index = (props) => {

    const { Lista , OpenModal } = props
    const [ listaNueva , setListaNueva ] = useState([])
    

    const changeStateItem = (id) =>{
      const nuevaLista = [...listaNueva]
      nuevaLista.forEach((e) => {
        if (e.id === id) {
          e.state = !e.state
        }
      });
      setListaNueva(nuevaLista)
    }

    useEffect(()=> {
      setListaNueva(Lista)
    })

    return (
        <FlatList 
            data={listaNueva}
            renderItem = { data => (
            <View style={styles.container}>
              <TouchableOpacity onPress={OpenModal.bind(this, data.item.id)} style={data.item.state?styles.itemCompleted:styles.itemUncompleted} ><Text style={{color:'white', fontFamily: 'roboto-black'}}>{data.item.value}</Text></TouchableOpacity>
              <Button onPress={() => changeStateItem(data.item.id)} title="✔" />
            </View>
              )}
            keyExtractor = {item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    itemUncompleted:{
      backgroundColor: Colors.primary,
      flex: 1,
      padding: 7.5,
      borderRadius: 7,
      marginRight: 5,
    },
    itemCompleted:{
      backgroundColor:'green',
      flex: 1,
      padding: 7.5,
      borderRadius: 7,
      marginRight: 5,
    },
  });

  export default Index