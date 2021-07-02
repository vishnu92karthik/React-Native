import  React, {useState} from 'react';
import { Text, View, StyleSheet,TextInput,ActivityIndicator,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default function App() {
  const [Iset1, setText1]= useState("");
  const [Iset2, setText2] = useState("");
  const [loading,setLoading] = useState(false);

  if(loading){
    return(
     <ActivityIndicator style={{color:"green"}}/> 
    )
  }

  const caluculateLove = ()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      alert(Math.floor(Math.random()*100),"%")
    },2000)
  }

  return(
    <View>
    <Text>hi</Text>
    <TextInput placeholder="BoyName" value={Iset1}  style={{height:50,borderWidth:2}} onChangeText={(text)=>{setText1(text)}}/>
     <TextInput placeholder="Girl Name" value={Iset2}  style={{height:50,borderWidth:2}} onChangeText={(text)=>{setText2(text)}}/>
    
     <Button title="press me" onPress={()=>{caluculateLove()}}/>
    </View>
  )

}