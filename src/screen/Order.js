import React ,{ useEffect, useState } from "react";
import { View, Text, Pressable,FlatList } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native-web";

export default function Order() {
  const[data,setData]= useState([]);
  useEffect(() => {
    fetch('https://653f47e79e8bd3be29e02682.mockapi.io/lab07Coffe')
      .then(response => response.json())
      .then(json => setData(json))
},[]);
  return (
    <View>
      <Text style={{ marginLeft: 15 }}>Welcome,Jala</Text>
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 15,
          fontSize: 20,
          marginVertical: 10,
        }}
      >
        Choice you Best food
      </Text>
      
      <TextInput placeholder="Search food" style={{padding:15,marginLeft:10,borderWidth:1,borderColor:'grey',minHeight:30,width:"80%",fontSize:18}}></TextInput>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:15}}>
        <Pressable style={{borderWidth:'grey',fontWeight:'bold',fontSize:16,height:40,width:100,marginHorizontal:10,borderWidth:1,justifyContent:'center',alignItems:'center'}}>Donut</Pressable>
        <Pressable style={{borderWidth:'grey',fontWeight:'bold',fontSize:16,height:40,width:100,marginHorizontal:10,borderWidth:1,justifyContent:'center',alignItems:'center'}}>Pink Donut</Pressable>
        <Pressable style={{borderWidth:'grey',fontWeight:'bold',fontSize:16,height:40,width:100,marginHorizontal:10,borderWidth:1,justifyContent:'center',alignItems:'center'}}>Floating</Pressable>
      </View>
      <FlatList
        data={data}
         
        renderItem={({ item }) => (
          <Text>{item.price}</Text>
        )}
        keyExtractor={(item) => item.id}
        initialNumToRender={1}
      />
    </View>
  );
}
