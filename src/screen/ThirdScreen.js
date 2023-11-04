import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
export default function ThirdScreen() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const search = () => {
    navigation.navigate("ThirdScreen");
  }
  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07Coffe")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
            <View style={styles.container}>
                <View  style={styles.itemContainer} >
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text style={{fontSize:20,fontWeight:'bold',marginVertical:10}}>{item.name}</Text>
                <Image                       source={require("/assets/Frame.png")}
></Image>
                <Text style={{fontSize:15,marginVertical:10}}>{item.price}</Text>
                </View>

                    </View>

        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",

    },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemContainer: {  
    flexDirection: "row",
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:0.5,
    borderColor:'grey'
  },
});
