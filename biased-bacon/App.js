import React from 'react';
import {View,Text,StyleSheet,Button,SafeAreaView,Image,TouchableOpacity,FlatList,ScrollView,ActivityIndicator} from 'react-native';

function App(){
const Profile = ({ name, status }) => {
  const [Iset,setItext] = useState("")
    return (
       
        <SafeAreaView>
    <View >
    <Text
    numberOfLines= {1}
    ellipsizeMode = "clip"
    >this is very pleasent mornigng good morning cishnu so 
    woke up early 
    </Text>
    </View>
    </ SafeAreaView>
        <View >
        <View>
            <Text>Vishnu is a bodyBuilder</Text>
            <Text>{name}</Text>
            <Text>{status}</Text>
            <Text> text input </Text>
  value = {Iset}
  <TextInput placeholder="Type a value" style={{height:50, borderWidth:2}}
  onChangeText= {(text)=>{setItext(text)}}/>
  <Button title="prss me" onPress={()=>{document.write(Iset)}}/> 
        </View>
    )
}

function App() {
    const  [name, setName] = useState("vishnu");
    let name = ""
    let myarr = [
        {id:"1",task:"eat"},
        {id:"2",task:"sleep"},
        {id:"3",task:"code"},
      ]
      const data = [
        {id:"1",title:"first -item"},
        {id:"2",title:"SECOND -item"},
        {id:"3",title:"third -item"},
        {id:"4",title:"fourth -item"}
      ]
      const RenderItem = ()=>{
        return  myarr.map(item=>{
            return <Text>{item.task}</Text>})
      }
    return (
        <ScrollView>
        <View>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
         <Text style={{height:60,fontSize:20, backgroundColor:'pink',textAlign:"center",paddingTop:15,borderBottomWidth:1}}>flatList...</Text>
        
         </View>
         </ScrollView>
        <View >
            <Profile name="karthik" status="single" />
            <Profile name="vishnu" status="programmer" />
            <Profile name="Asok" status="committed" />
            {
      name ? <Text>{name}</Text> : <Text>No name</Text>
    }
     <Text>flatList...</Text>
   <FlatList 
   data = {data}
   renderItem = {({item})=>{
     return <Text>{item.title}</Text>
   }}
   />
        </View>
          <TouchableOpacity><Image  source={require('./assets/snack-icon.png')} style={{height:100,width:100}}/> </TouchableOpacity>
          // <Image source= {{uri:"https://images.unsplash.com/photo-1625059980424-729807dd4310?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}} />
        {
            myarr.map(item=>{
              return <Text>{item.task}</Text>})
          }
          <RenderItem />
          <RenderItem />
          <RenderItem />
          {
   name ? <Text>{name}</Text>:<Text>no name</Text>
    }
    <Button 
    title="click"
    color="blueviolet"
    onPress={
      ()=>{
        setName("karthik")
      }
    }
    
   
  

// const styles = StyleSheet.create({
//   myview:{
//     backgroundColor:"green",
//     marginBottom:3,
//     paddingBottom:15,
//     borderColor:"yellow"
//   }
// })

export default App;