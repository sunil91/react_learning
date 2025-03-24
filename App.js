/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const users = [{ id: 1, name: "Sunil" }, { id: 2, name: "Rahul" }, { id: 3, name: "Amit" }, { id: 4, name: "bunty" }, { id: 6, name: "tony" }, { id: 7, name: "pay" }, { id: 8, name: "money" }, { id: 9, name: "test" },{ id: 1, name: "Sunil" }, { id: 2, name: "Rahul" }, { id: 3, name: "Amit" }, { id: 4, name: "bunty" }, { id: 6, name: "tony" }, { id: 7, name: "pay" }, { id: 8, name: "money" }, { id: 9, name: "test" }];



  return (
    <View>
      <Text style={{ fontSize: 30 }}> List with map function</Text>
      <ScrollView style={{marginBottom:50}}>{
        users.map((item) => <Text style={style.item}> {item.name}</Text>)

      }
      </ScrollView>

    </View>
  );
}

const style = StyleSheet.create({
  item:
    { fontSize: 24, color: '#fff', padding: 10, borderColor: 'black', backgroundColor: 'blue', margin: 10 }

})


export default App;
