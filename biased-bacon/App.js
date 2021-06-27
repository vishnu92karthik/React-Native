import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ name, status }) => {

    return (
        <View>
            <Text>Vishnu is a bodyBuilder</Text>
            <Text>{name}</Text>
            <Text>{status}</Text>
        </View>
    )
}

function App() {
    let name = ""
    let myarr = [
        {id:"1",task:"eat"},
        {id:"2",task:"sleep"},
        {id:"3",task:"code"},
      ]
      const RenderItem = ()=>{
        return  myarr.map(item=>{
            return <Text>{item.task}</Text>})
      }
    return (
        <View >
            <Profile name="karthik" status="single" />
            <Profile name="vishnu" status="programmer" />
            <Profile name="Asok" status="committed" />
            {
      name ? <Text>{name}</Text> : <Text>No name</Text>
    }
        </View>
        {
            myarr.map(item=>{
              return <Text>{item.task}</Text>})
          }
          <RenderItem />
          <RenderItem />
          <RenderItem />
    )
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