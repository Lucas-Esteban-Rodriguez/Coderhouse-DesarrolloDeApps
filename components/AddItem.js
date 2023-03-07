import { Button, StyleSheet, TextInput, View } from "react-native"

import colors from "../constants/colors";

const AddItem = (props) =>{

    const {Add , ChangeText , Text } = props

    return(
        <View style={styles.container}>
            <TextInput placeholder='Item de lista...' style={styles.input} value={Text} onChangeText={ChangeText} />
            <Button title='ADD' onPress={Add} color={colors.buttons} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: 200,
      flex: 1,
    },
});

export default AddItem