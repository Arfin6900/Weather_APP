import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';



export default function Settings() {
  const temp = [
    {
      date: 'Today',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Tomorrow',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Mon',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Tue',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Thurs',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Fri',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Sat',
      weather: 'Sunny',
      temp: '30/33* C'
    },
    {
      date: 'Sun',
      weather: 'Sunny',
      temp: '30/33* C'
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: 'darkblue', paddingHorizontal: 10, alignItems: "center" }}>
      <View style={{
        backgroundColor: 'red', paddingHorizontal: 10,
        height: "50%",
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, color: 'black', width: '34%', textAlign: 'right' }}>Next 7 Days</Text>
          <Image
            style={{ width: 20, height: 26 }}
            source={require('../src/assets/arrow.png')}
          />
        </View>



        <FlatList
          data={temp}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <View style={{
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between'
              }}>
                <Text style={{ fontSize: 18, color: 'white', width: '34%' }}>{item.date}</Text>
                <Text style={{ fontSize: 18, color: 'white', width: '34%', textAlign: 'center' }}>Today</Text>
                <Text style={{ fontSize: 18, color: 'white', width: '34%', textAlign: 'right' }}>Today</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  }
});

