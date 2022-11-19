// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, ActivityIndicator, Alert, } from "react-native";
// // import * as Location from "react-native-location";


// const API_KEY = "18c0f7cd21e62153b137e7fb5e50e152";
// let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`


// const Index = ({ navigation }) => {

//     const [forcast, setForcast] = useState(null);
//     const [refreshing, setRefreshing] = useState(false);


//     const loadForcast = async () => {
//         setRefreshing(true);

//         // ask for permission to access location
//         const {status} = await Location.requestForegroundPermissionAsync();
//         if (status !=='granted') {
//             Alert.alert('Permission to access location was denied'); // if permission is denied, show an alert
//         }

//         //get current location
//          let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true})
//     }

    //fetches the weater data from the openweathermap api 
    //   const response = await fetch(`${url}&lat=${location.coords.latitude}&lon=${location.coords.latitude}`);
    //   const data = await response.json();










    //     async function fetchWeatherData(cityName) {

    //         try {
    //             const response = await fetch(API);
    //             if (response.status == 200) {
    //                 const data = await response.json();
    //                 setWeatherData(data);
    //             } else {
    //                 setWeatherData(null);
    //             }
    //             setLoaded(true);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     useEffect(() => {
    //         fetchWeatherData('Islamabad');
    //         console.log(weatherData);
    //     },[])

    //  if (!loaded) {
    //     return(
    //         <View>
    //           <View style={[Styles.container, Styles.horizontal]}>
    //          <ActivityIndicator />
    //          <ActivityIndicator size="large" />
    //          <ActivityIndicator size="small" color="#0000ff" />
    //          <ActivityIndicator size="large" color="#00ff00" />
    //        </View>
    //         </View>
    //     )
    //  }

//     return (
//         <View style={Styles.container}>

//             <Text>index secreen</Text>

//         </View>

//     )

// }
// export default Index;

// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     input: {
//         width: 360,
//         fontSize: 16,
//         borderWidth: 1,
//         borderColor: "gray",
//         paddingVertical: 10,
//         marginVertical: 10,
//     },
// });


