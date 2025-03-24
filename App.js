/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const users=[{id:1,name:"Sunil"},{id:2,name:"Rahul"},{id:3,name:"Amit"},{id:4,name:"bunty"},{id:6,name:"tony"}];
  


  return (
    <View>
      <Text style={{ fontSize: 30 }}> List with Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={({item})=><Text style={style.item}>{item.name} </Text>}

        keyExtractor={item=>item.id}
      />
      

    </View>
  );
}

const style = StyleSheet.create({
  item:
    { fontSize: 24, color: '#fff', padding: 10,borderColor:'black',backgroundColor:'blue',margin:10 }

})


export default App;
