import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
export default function SecondScreen() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const search = () => {
    navigation.navigate("ThirdScreen");
  }
  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={search} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
               }}
              >
                {item.state == "Accepting Orders" ? (
                  <View style={{ flexDirection: "row", alignItems: "center",  marginVertical:10,          height:30,      backgroundColor: "#F3F4F6",paddingHorizontal:15  }}>
                    <Image
                      source={require("/assets/yes.png")}
                      style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    <Text style={{ color: "green" ,fontSize:14}}>{item.state}</Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: "row", alignItems: "center",  marginVertical:10,          height:30,      backgroundColor: "#F3F4F6",paddingHorizontal:10  }}>
                    <Image
                      source={require("/assets/no.png")}
                      style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    <Text style={{ color: "red" ,fontSize:14}}>{item.state}</Text>
                  </View>
                )}
                  <View style={{ flexDirection: "row", alignItems: "center",  marginVertical:10,          height:30,marginHorizontal:10,      backgroundColor: "#F3F4F6",width:140  }}>
                  <Image
                                        source={require("/assets/time.png")} style={{ width: 20, height: 20,marginHorizontal:5}}

                  ></Image>
                    <Text style={{ color: "red" ,fontSize:13}}>{item.time}</Text>

                  </View>
                 
              </View>
              <Image
                      source={require("/assets/location.png")}
                      style={{ width: 15, height: 20, marginTop:15, }}
                    />
            </View>
            
          <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "left" }}>
  {item.name}
</Text>
<Text style={{ fontSize: 14, color: "gray", textAlign: "left" }}>
  {item.coordinates}
</Text>
</Pressable>

        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginVertical: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 10,
    height: 200,
  },
  itemImage: {
    width: "108%", // Chiều rộng bằng 100% của itemContainer
    height: "50%", // Chiều cao bằng 50% của itemContainer
    borderRadius: 10,
    marginTop: -10,
    marginLeft: -10,
  },
});
