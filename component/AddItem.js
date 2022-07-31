import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const AddItem = ({addList}) =>{ 
    
    const [text,setText]=useState('')

    const onChange = textValue => setText(textValue)

  return(
     <View style={Styles.header}> 
        <TextInput placeholder='Item Name' style={Styles.input} onChangeText={onChange}></TextInput>
        <TouchableOpacity style={Styles.btn} onPress={()=>addList(text)}>
            <Text style={Styles.btnText}> 
                Add Item
            </Text>
        </TouchableOpacity> 
     </View> 
  ) 
} 

const Styles = StyleSheet.create({
  input:{
    height: 60,
    padding: 8,
    marginTop: 15,
    marginBottom: 5,
    margin: 6,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }, 
  btn:{
    backgroundColor: 'darkgreen',
    padding: 9,
    margin: 5,
  },
  btnText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem;