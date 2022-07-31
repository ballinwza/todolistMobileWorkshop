import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native' 


const ListItem = ({item, deleteList}) =>{
  return(
     <TouchableOpacity style={Styles.listItem}> 
        <View style={Styles.listItemView}>
            <Text style={Styles.listItemText}>{item.text}</Text> 
            <Text onPress={()=> deleteList(item.id)} style={Styles.closeButton}>X</Text>
        </View>
     </TouchableOpacity> 
  ) 
} 

const Styles = StyleSheet.create({
  listItem:{
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItemText:{
    fontSize: 18
  },
  closeButton:{
    color: 'firebrick',
    fontWeight: 'bold',
  }
})

export default ListItem;