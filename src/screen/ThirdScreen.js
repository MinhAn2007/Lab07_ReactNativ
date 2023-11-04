import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
export default function ThirdScreen() {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // Mảng lưu trữ ID sản phẩm đã chọn
  const navigation = useNavigation();
  const cart = () => {
    navigation.navigate("FourthScreen",{selectedItems });
  };
  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07Coffe")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const cong = (itemId) => {
    setSelectedItems([...selectedItems, itemId]); // Thêm ID sản phẩm vào mảng
  };

  const tru = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item !== itemId); // Loại bỏ ID sản phẩm khỏi mảng
    setSelectedItems(updatedItems);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 5,
                  }}
                >
                  {item.name}
                </Text>

                <Image
                  source={require("/assets/Frame.png")}
                  style={{ width: 20, height: 20, marginTop: 15 }}
                ></Image>
                <Text
                  style={{ fontSize: 15, marginTop: -22, marginHorizontal: 25 }}
                >
                  ${item.price}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 100,
                }}
              >
           <Pressable onPress={() => cong(item.id)}>
  <Image
    source={require("/assets/cong.png")}
    style={{
      width: 20,
      height: 20,
      marginTop: 30,
      marginLeft: 0,
    }}
  ></Image>
</Pressable>
<Pressable onPress={() => tru(item.id)}>
  <Image
    source={require("/assets/tru.png")}
    style={{
      width: 20,
      height: 20,
      marginTop: 30,
      marginLeft: 50,
    }}
  ></Image>
</Pressable>

              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
  onPress={cart}
  style={{
    backgroundColor: "#EFB034",
    marginHorizontal: 10,

    marginVertical: 20,
    minHeight: 50,
    width: "95%",
    color: "white",
  }}
>
  <Text style={{ color: "white",    textAlign: "center",marginTop:10,fontSize:20,
    justifyContent: "center", fontWeight: "bold" }}>GO TO CART</Text>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemImage: {
    width: 85,
    height: 80,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "grey",
    justifyContent: "space-around",
  },
});
