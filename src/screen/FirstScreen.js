import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image,Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
export default function FirstScreen() {
  const navigation = useNavigation();
  const secondScreen = () => {
    navigation.navigate('SecondScreen');
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 3))); // Chỉ hiển thị 3 phần tử đầu tiên
  }, []);
  const styles = StyleSheet.create({
    Headers:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      marginVertical: 50,
    }
  });
  return (
    <View style={{width:'100%',backgroundColor:'#DEE1E6'}}>
      <Text style={styles.Headers}  >Welcome to Cafe World</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={{ marginVertical:30,  borderRadius: 10,
            marginHorizontal:100, width: 200, height: 70 }} />
        )}
        keyExtractor={(item) => item.id}
        initialNumToRender={1}
      />
      <Pressable onPress={secondScreen} style={{backgroundColor: '#00BDD6',color: "white", marginHorizontal: 50,textAlign:'center',justifyContent:'center', marginVertical: 70,minHeight:50,width:300}}> GET START </Pressable>
    </View>
    
  );

}
