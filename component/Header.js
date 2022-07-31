import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const Header = (props) =>{
  return(
     <View style={Styles.header}> 
        <Text style={Styles.text}>{props.title}</Text>
     </View> 
  ) 
}

Header.defaultProps = {
    title: 'My Book List'
}

const Styles = StyleSheet.create({
  header:{ 
    justifyContent: 'center', 
    alignItems: 'center',
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue'
  }, 
  text:{
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  }
  
})

export default Header;