import React, { useState } from 'react'
import Header from './component/Header'
import ListItem from './component/ListItem'
import AddItem from './component/AddItem'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import uuid from 'uuid-random'

const App = () =>{

  const [items, setItems] = useState([
    { id: uuid(), text: 'Wake up'},
    { id: uuid(), text: 'Take shower'},
    { id: uuid(), text: 'Have breakfast'},
    { id: uuid(), text: 'Go to work'},
  ]) 

  const deleteItem = (id)=> {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  const addItem = (text)=>{
    if(!text){
      Alert.alert('Error', 'กรุณาใส่ข้อมูล')
    }else{
      setItems(prevItem => {
        return [{id: uuid(), text}, ...prevItem]
      })
    }
  }

  return(
     <View style={Styles.container}> 
        <Header />
        <AddItem addList={addItem}/>
        <FlatList data={items} renderItem={({item})=>(<ListItem item={item} deleteList={deleteItem}/>)}></FlatList>
     </View> 
  ) 
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
  }, 
  
})

export default App;