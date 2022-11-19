import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
export default function Settings() {
  const temp = [
    {
      date:'Today',
      weather:'Sunny',
      temp:'30/33* C'
    },
    {
      date:'Tomorrow',
      weather:'Sunny',
      temp:'30/33* C'
    },
    {
      date:'Mon',
      weather:'Sunny',
      temp:'30/33* C'
    },
  ]

  return (
    <View style={{flex:1,backgroundColor:'darkblue',paddingHorizontal:10}}>
      <FlatList
        data={temp}
        keyExtractor={(item,index)=>index}
        renderItem={({item,index})=>{
          return (
            <View style={{
              borderWidth:1,
              borderColor:'white',
              marginTop:10,
              paddingVertical:10,
              paddingHorizontal:20,
              borderRadius:5,
              flexDirection:'row',
              alignItems:"center",
              justifyContent:'space-between'
              }}>
              <Text style={{fontSize:18,color:'white',width:'34%'}}>{item.date}</Text>
              <Text style={{fontSize:18,color:'white',width:'34%',textAlign:'center'}}>Privacy Policy</Text>
              <Text style={{fontSize:18,color:'white',width:'34%',textAlign:'center'}}>Open source Liences</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main : {
    flex: 1,
    justifyContent: "center",
  }
});