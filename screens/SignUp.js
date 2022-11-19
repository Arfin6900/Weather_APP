import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, text } from "react-native";





const Signup = ({ navigation }) => {


    const [Name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [confirm, setconfirmPassword] = useState("");
    const [NameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    // const dispatch = useDispatch();


    // const Submit = async (username,password) => {
    //   console.log('i clicked',username,password)

    //   try {
    //     let response =  await auth.createUserWithEmailAndPassword(username, password);
    //      if(response){
    //        console.log("ddd",response)
    //        navigation.navigate("Index")

    //      }
    //    } catch (e) {
    //      console.error(e.message);
    //    }
    // }

    const handleSubmit = () => {

        var NameValid = false;
        if (Name.length == 0) {
            setNameError("Name is required");
        }
        else if (Name.length < 6) {
            setNameError("Name should be minimum 6 characters");
        }
        else if (Name.indexOf(' ') >= 0) {
            setNameError('Name cannot contain spaces');
        }
        else {
            setNameError("")
            NameValid = true
        }

        var EmailValid = false;
        if (Email.length == 0) {   
            setEmailError("Email is required");
        }
        else if (Email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (Email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces'); 
        }
        else {
            setEmailError("")
            EmailValid = true
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

        if (EmailValid && passwordValid) {
            alert('Email: ' + Email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }

    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerTitle}>Sign Up</Text>
            <TextInput
                style={Styles.input}
                value={Name}
                onChangeText={(text) => setName(text)}
                placeholder="Name"
                placeholderTextColor={'black'}
                />
              <TextInput
                placeholderTextColor={'black'}
                style={Styles.input}
                value={Email}
                onChangeText={(text) => setEmail(text)}
                secureTextEntry={true}
                placeholder="Email"
                />
           <TextInput
                placeholderTextColor={'black'}
                style={Styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="password"
                />
            <TextInput
                placeholderTextColor={'black'}
                style={Styles.input}
                value={confirm}
                onChangeText={(text) => setconfirmPassword(text)}
                secureTextEntry={true}
                placeholder="Confirm"
            />
            {/* <Button onPress={() => Submit(username,password)} title="Signup" /> */}
            <View style={Styles.Signup}>
                <Button
                    onPress={() =>
                        navigation.navigate("Home")}
                    title="Signup"
                />
            </View>
            <Text style={Styles.Services}>By selecting Agree and continue below,</Text>
            <Text style={Styles.Services}>I agree to Term of Services and Perivacy Policy</Text>
        </View>
    );
};

export default Signup;

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
    Signup: {
        marginTop:20,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        paddingHorizontal:20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: 10,
        marginVertical: 10,
        color:'black',
        borderRadius: 15,
    },
    Services: {
        color: "darkblue"
    }
});