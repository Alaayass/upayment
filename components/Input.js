import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'

function Input ({inputConfig}) {
    return ( <View style={styles.inputContainer}>
        <TextInput {...inputConfig}  />
    </View> )
}
export default Input;

const styles = StyleSheet.create({
    inputContainer : {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        
    }
})