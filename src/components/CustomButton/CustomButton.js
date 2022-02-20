import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style = {styles[`container_${type}`]}>
      <Text style ={styles[`text_${type}`]}>{text}</Text>
     </Pressable>
  )
}

const styles = StyleSheet.create({
    container_PRIMARY: {
      backgroundColor: '#E76D6C',
      width: '75%',

      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 40
    },
    container_TERTIARY: {
      width: '100%',

      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 5
    },
    
    text_PRIMARY:{
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
      color: 'gray',
    }
})

export default CustomButton