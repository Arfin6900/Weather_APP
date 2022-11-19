import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, Image } from "react-native";




const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");




    // const onLogin = () => {
    //     navigation.navigate("")
    // };

    const handleSubmit = () => {
        var emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }

        var passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }

    }
    return (
        <View style={Styles.container}>

            <Image
                style={{ width: 150, height: 150 }}
                source={require('../src/assets/unnamed.png')}
            />

            <Text style={Styles.headerTitle}>Login to your account</Text>

            <View style={Styles.inputView}>
                    <TextInput
                        style={Styles.input}
                        placeholder="Enter Email"
                        placeholderTextColor={'black'}
                        onChangeText={text =>
                            setEmail(text)}
                             value={email}
                    />
                {emailError.length > 0 &&
                    <Text>{emailError}</Text>
                }
                    <TextInput
                        style={Styles.input}
                        placeholder="Enter Password"
                        placeholderTextColor={'black'}
                        secureTextEntry={true}
                        onChangeText={text =>
                            setPassword(text)} value={password}

                    />

                {passwordError.length > 0 &&

                    <Text>{passwordError}</Text>
                }

                <View style={Styles.Button}>

                    <View style={Styles.fixTosubmit}>
                        <Button
                            onPress={handleSubmit}
                            title='submit'
                        />
                    </View>
                    {/* <Button
                        onPress={() => onLogin(email, password)}
                        title="Login"
                    /> */}
                    <View style={Styles.fixToSignup}>
                        <Button
                            onPress={() =>
                                navigation.navigate("Signup")}
                            title="Signup"
                        />
                    </View>
                </View>


            </View>
            {/* <View>

 

                <Text>
                    Email entered: {email}
                </Text>
                <Text>
                    Password entered: {password}
                </Text> 
            </View> */}

        </View>
    )
}



export default Login;

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    headerTitle: {
        fontSize: 24,
        color:'black'
    },

    inputView:{
        width:'90%'
    },

    input: {
        width: '100%',
        paddingHorizontal:20,
        fontSize: 16,
        borderWidth: 1,
        borderHeight: 15,
        borderRadius: 15,
        borderColor: "gray",
        paddingVertical: 10,
        marginVertical: 10,
        color:'black'
    },


    fixTosubmit: {
        backgroundColor: "black",
        marginTop:15,
        borderRadius: 15,
        marginBottom: 10,
        borderHeight: 20,
    },

    fixToSignup: {
        backgroundColor: "black",
        marginTop: 20

    },

});