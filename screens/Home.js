import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, } from 'react-native';


const Home = ({ navigation }) => {

    return (
        

        <View style={styles.container}>
            <ImageBackground
                style={{ width: 400, height: 900, zIndex: -1 }}
                source={require('../src/assets/bg1.jpg')}
            >
                <View style={{ zIndex: 9999 }}>
                    <Text style={{ ...styles.titleText }}>28°C</Text>
                    <Text style={styles.Text}>Overcast</Text>
                    <View>
                        <Button
                            onPress={() =>
                                navigation.navigate()}
                            title="AQI 93"
                        />
                    </View>
                    <View style={styles.TextLeft}>
                        <Text>Today Overcast</Text>
                        <Text>Fri Clear</Text>
                        <Text >Tomarrow Clear</Text>
                    </View>
                    <View style={{color : 'red', flexDirection : 'row',justifyContent : 'space-between'}}>
                        <Text>32°/20°</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>



    );
}

const renderAddListIcon = () => {

    return (
        <TouchableOpacity hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
            onPress={() => navigation.navigate("index")}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'row',
        // alignItems: "center",
        justifyContent: "flex-end"
        // justifyContent: 'flex-start',
    },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        flex: 1,
        borderRadius: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
    },

    icon: {
        padding: 5,
        fontSize: 24,
    },

    baseText: {
        fontFamily: "Cochin"
    },
    
    titleText: {
        fontSize: 100,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 70,
        color: "white"
    },

    Text: {
        fontSize: 20,
        textAlign: "center",
        // marginVertical: 10,
        color: "white"

    },
    // TextRight: {
    //     backgroundColor:"black",
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection: "row",
    //     // justifyContent: 'flex-end',
    //     marginTop: 100,
    //     color: "black"
    // },
    // TextRight: {
    //     marginTop: 10,
    //     color: "white"
    // },
    // TextRight: {
    //     marginTop: 10,
    //     color: "white"
    // },
    TextLeft: {
        marginTop: 10,
        color: "white",
    },

});

export default Home

