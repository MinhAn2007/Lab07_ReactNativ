import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
export default function FourthScreen() {
    const route = useRoute();
    const { selectedItems } = route.params;
    console.log(selectedItems)
    return (
        <View>
<View style={{ flexDirection: 'row', height: '120px', width: '95%', marginHorizontal: 10, backgroundColor: '#00BDD6',marginVertical:5}}>
  <View style={{ flexDirection: 'column', flex: 1 }}>
    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' ,marginVertical:25,marginHorizontal:10}}>CAFE DELIVERY</Text>
    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold',marginHorizontal:10 }}>ORDER#18</Text>
  </View>
  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold',marginVertical:35,marginHorizontal:20}} >$5</Text>
</View>
<View style={{ flexDirection: 'row', height: '120px', width: '95%', marginHorizontal: 10, backgroundColor: '#8353E2',marginVertical:5}}>
  <View style={{ flexDirection: 'column', flex: 1 }}>
    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' ,marginVertical:25,marginHorizontal:10}}>CAFE</Text>
    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold',marginHorizontal:10 }}>ORDER#18</Text>
  </View>
  <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold',marginVertical:40,marginHorizontal:20}}>$5</Text>
</View>
        </View>
    );
};
