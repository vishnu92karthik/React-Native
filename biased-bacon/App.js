import React from 'react';
import {View,Text} from 'react-native';

const Profile = ({name,status})=>{
  
  return(
    <View>
    <Text>Vishnu is a bodyBuilder</Text>
    <Text>{name}</Text>
     <Text>{status}</Text>
    </View>
  )
}

function App(){
  return ( 
    <View>
  <Profile name="karthik" status="single"/>
  <Profile name="vishnu" status="programmer"/>
  <Profile name="Asok" status="committed"/>
  
    </View>
    )
}

export default App;