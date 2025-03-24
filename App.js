/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const users = [{ id: 1, name: "Sunil", email: "sunil@gmail.com" }, { id: 2, name: "Rahul", email: "rahul@gmail.com" }, { id: 3, name: "Amit", email: "amit@gmail.com" }, { id: 4, name: "bunty", email: "bunty@gmail.com" }, { id: 6, name: "tony", email: "tony@gmail.com" }, { id: 7, name: "pay", email: "pay@gmail.com" }, { id: 8, name: "money", email: "money@gmail.com" }, { id: 9, name: "test", email: "test@gmail.com" },];



  return (
    <View>
      <Text style={{ fontSize: 25 }}> Component in Loop with FlatList</Text>

      <FlatList data={users} renderItem={({ item }) =><UserData item={item}/>}>


      </FlatList>

      //component-with-list
    </View>
  );
}
const UserData=(props)=>{
const item=props.item;
  return (
<View style={style.box}>
        <Text style={style.item}>{item.name}</Text>
        <Text style={style.item}>{item.email}</Text>

      </View>
  )
}

const style = StyleSheet.create({
  item:
  {
    fontSize: 24,
    color: 'orange',
    padding: 10,
    margin: 2,
    flex: 1,
    backgroundColor:"blue",
    textAlign:'center',
    
  },

  box: {
    flexDirection: 'row',
    borderColor: 'orange',
    borderWidth: 2,
    marginBottom: 10

  }

})


export default App;
