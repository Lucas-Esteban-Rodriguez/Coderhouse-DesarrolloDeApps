import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalItem = (props) =>{

    const {Delete , Close , Visible , Item} = props

    return(
        <Modal
            animationType='slide'
            visible={Visible}
        >
            <View style={styles.containerModal}>
              <View>
                 <Text style={{marginBottom:15, fontSize:20}}>Estas seguro de que quieres eliminar?:</Text>
              </View>
              <View style={styles.item}>
                <Text style={{color:'white'}}>{Item.value}</Text>
              </View>
              <View style={styles.container}>
                <Text>Confirmar</Text>
                  <Button title='Si' onPress={Delete} />
                  <Button title='No' onPress={Close} />
              </View>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      width:175
    },
    containerModal: {
      justifyContent:'center',
      alignItems: 'center',
      flex:1,
    },
    item:{
      backgroundColor:'#1d3557',
      padding: 7.5,
      borderRadius: 7,
      marginRight: 5,
      marginBottom: 15
    },
});

export default ModalItem