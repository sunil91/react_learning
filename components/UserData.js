import {
    FlatList,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default UserData=(props)=>{
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