import { Button, StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors';
import { useState } from 'react'

const PasswordGenerator = (props) => {

    const [ newPassword, setNewPassword ] = useState()

    function generatePassword() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let lenght = 12;
        let password = '';
        for (let i = 0, n = caracteres.length; i < lenght; i++) {
          password += caracteres.charAt(Math.floor(Math.random() * n));
        }
        setNewPassword(password)
      }

    return (
      <View style={styles.screen}>

        <Text style={{fontSize:20}} >PasswordGenerator</Text>
        <Button title='Generar' onPress={generatePassword} color={Colors.buttons} />
        <Text style={{backgroundColor: Colors.primary, color: 'white', padding: 7 }} >{newPassword}</Text>

        <Button title='Volver a la lista' onPress={props.switchScreen} />

      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 150,
        alignItems: 'center',
        flex: 1,
        justifyContent:'space-evenly'
    }
})

export default PasswordGenerator