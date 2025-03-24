/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const users = [{ id: 1, name: "Sunil" }, { id: 2, name: "Rahul" }, { id: 3, name: "Amit" }, { id: 4, name: "bunty" }, { id: 6, name: "tony" }, { id: 7, name: "pay" }, { id: 8, name: "money" }, { id: 9, name: "test" },];



  return (
    <View>
      <Text style={{ fontSize: 30 }}> Grid with Dynamic Data</Text>

      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}> 
      {
      //TODO static data
      /* <Text style={style.item}> Sunil</Text>
      <Text style={style.item}> Sunil</Text>
      <Text style={style.item}> Sunil</Text>
      <Text style={style.item}> Sunil</Text> */
      
      users.map((item)=><Text style={style.item}>{item.name}</Text>)
      
      }

      </View>


    </View>
  );
}

const style = StyleSheet.create({
  item:
    { fontSize: 24, color: '#fff', padding: 10, borderColor: 'black', backgroundColor: 'blue', margin: 10,width:120,height:120,textAlignVertical:'center',textAlign:'center' }

})


export default App;
