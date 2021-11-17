import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Image,
  Platform,
   StyleSheet
} from "react-native";
// import Select2 from "react-select2-native";
import { basic, form, colors } from "../components/styles";
import EnrolledStudent from "../Models/EnrolledStudent";
import Students from '../Models/Students';
// import * as LocalAuthentication from 'expo-local-authentication';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Ionicons } from '@expo/vector-icons';

// create a component
export default class About extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      loading: false,
      

    }
  }    

  
  componentDidMount() {

   
 
  }

 
  

  render() {

    // console.log(this.state.SingleStud)
    const { StudentRecord, message,loading, SingleStud,visible } = this.state;
    // console.log(StudentRecord);

    return (
      <View style={[basic.container]}>
        <Text style={[form.SaerchHeading, form.field]}>About Us</Text>

        <Image source={require("../assets/bigtrust.png")} style={basic.LoginLogo} />

       
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#EEEEEE',
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C3272B',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginTop: 16,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#FFFFFF',
  },
});