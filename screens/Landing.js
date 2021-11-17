import  AsyncStorage  from "@react-native-async-storage/async-storage";
import React, { useState,useEffect } from "react";

// UI elements
import { View, Text, TouchableOpacity, Image } from "react-native";
// Custom styles
import { basic, form } from "../components/styles";
const Landing = ({ navigation }) => {

  useEffect(() => {
    if (AsyncStorage.getItem('LOGGIN_USER')){

      return (navigation.navigate("Welcome"))

    }
    
 }, []);


    return (
      <>
        <View style={[basic.container]}>
        <Image source={require("../assets/bigtrustHome.jpg")} style={basic.image} />

          <View>
            <View style={form.field}>
              <Text style={form.heading}>Welcome to BigTrust Academy !</Text>
              <Text style={[form.text, { paddingVertical: 10, lineHeight: 25 }]}>
                We appreciate you taking the time for downloading our app and
                evaluating us.
              </Text>
            </View>
            <View style={form.field}>
              <TouchableOpacity
               onPress={() => navigation.navigate('Login')}
                style={form.buttonSuccess}
              >
                <Text style={form.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
}
export default Landing;







