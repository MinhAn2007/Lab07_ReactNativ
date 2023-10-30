import react, { useState } from "react";
import { StyleSheet, View, Text,FlatList } from "react-native-web";
import { Image } from "react-native";
import { useEffect } from "react";
export default function FistScreen() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07Coffe")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <View>
        <FlatList
        data={data}
        renderItem={({ item }) => (
            <Image source={{uri:item.image}} style={{width:100,height:100}}></Image>
        )}
        keyExtractor={item => item.id}
        initialNumToRender = {1}
        />
        </View>
  );
}
