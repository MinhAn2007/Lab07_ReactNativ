import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function FourthScreen() {
  const route = useRoute();
  const { selectedItems } = route.params;
  const [filteredData, setFilteredData] = useState([]);
  const [localSelectedItems, setLocalSelectedItems] = useState(selectedItems); 

  const navigation = useNavigation();
  const [total, setTotal] = useState(0); 
  const pay = () => {
    alert("Pay successfully !!! total is " + total + "$");
  };
  const updateTotal = (items) => {
    const updatedTotal = filteredData
      .filter((item) => items.includes(item.id))
      .reduce((acc, item) => acc + item.price, 0);
    setTotal(updatedTotal);
  };

  useEffect(() => {
    updateTotal(localSelectedItems);
  }, [localSelectedItems, filteredData]);

  const tru = (itemId) => {
    const updatedItems = localSelectedItems.filter((item) => item !== itemId);

    if (updatedItems.length === 0) {
      navigation.navigate("ThirdScreen");
    } else {
      setLocalSelectedItems(updatedItems); // Update the local state
    }
  };


  useEffect(() => {
    fetch("https://653f47e79e8bd3be29e02682.mockapi.io/lab07Coffe")
      .then((response) => response.json())
      .then((data) => {
        const filteredItems = data.filter((item) =>
          localSelectedItems.includes(item.id)
        );
        setFilteredData(filteredItems);
      });
  }, [localSelectedItems]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: "120px",
          width: "95%",
          marginHorizontal: 10,
          backgroundColor: "#00BDD6",
          marginVertical: 5,
        }}
      >
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginVertical: 25,
              marginHorizontal: 10,
            }}
          >
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            ORDER#18
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            marginVertical: 35,
            marginHorizontal: 20,
          }}
        >
          $5
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: "120px",
          width: "95%",
          marginHorizontal: 10,
          backgroundColor: "#8353E2",
          marginVertical: 5,
        }}
      >
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginVertical: 25,
              marginHorizontal: 10,
            }}
          >
            CAFE
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            ORDER#18
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            marginVertical: 35,
            marginHorizontal: 20,
          }}
        >
         ${total}
        </Text>
      </View>
      <FlatList
        data={filteredData}
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
                <Pressable>
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
  onPress={pay}
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
    justifyContent: "center", fontWeight: "bold" }}>PAY NOW</Text>
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
