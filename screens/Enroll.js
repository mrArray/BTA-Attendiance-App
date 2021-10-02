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
import Select2 from "react-select2-native";
import { basic, form, colors } from "../components/styles";
import EnrolledStudent from "../Models/EnrolledStudent";
import Students from '../Models/Students';
// import * as LocalAuthentication from 'expo-local-authentication';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Ionicons } from '@expo/vector-icons';

// create a component
export default class Enroll extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      StudentRecord: [],
      loading: false,
      data: [],
      SingleStud: [],
      sccaned: false,
      visible:false,
      message:"",


    }
  }    

  closeModal() {
    this.setState({
        visible : false
    });
  }
  
  componentDidMount() {

    // this.checkDeviceForHardware();
    // this.checkForBiometrics();
    Students.get_StudentsList()
    .then(res => {
      const StudList = res;
      console.log(res)
      this.setState({
        StudentRecord: StudList
      });
    })
  }

  //  onRequestClose (){


  //  }
    
 

    //check  if Device can enroll Biometrics Data
  // checkDeviceForHardware = async () => {

  //   let compatible = await LocalAuthentication.hasHardwareAsync();
  //   if (compatible) {
  //     alert('Compatible Device!');
  //   } else
  //     alert('Current device does not have the necessary hardware!')
  //   checkForBiometrics = async () => {
      
  //    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
  //     if (!biometricRecords) {
  //       alert('No Biometrics Found')
  //     }
  //     else {
  //       alert('Biometrics Found')
  //     }

  //   }
 
  // }

  // //check  Biometrics Data
  // checkForBiometrics = async () => {

  //   let biometricRecords = await LocalAuthentication.isEnrolledAsync();

  //   if (!biometricRecords) {

  //     alert('No Biometrics Found')

  //   } else {

  //     alert('Biometrics Found')

  //   }
  // };

  componentDidUpdate(prevProps, prevState) {
    const id = this.state.data[0]
    try {

      if (prevState.data !== this.state.data) {
        Students.find(id)
          .then(res => {
            const SingleStud = res;
            console.log(res)

            this.setState({
              SingleStud: SingleStud,
              loading: false
            });
          })
      }
    } catch (e) {


      console.log(e);
    }
  }

   handleSubmit=(SingleStud) =>{

    SingleStud.enrolled="yes";
    Students.update(SingleStud);

    this.setState({
      visible: true,
      message: `${SingleStud.fullname  +"\nEnrolled Successefully" }`,
      // message: `${SingleStud?SingleStud.fullname && +"\nEnrolled Successefully":"Please Select a Student" }`,
    });
    // alert(SingleStud.fullname +"Enrolled Successefully");
  //  console.log(SingleStud.username); 
    
  }

  render() {

    // console.log(this.state.SingleStud)
    const { StudentRecord, message,loading, SingleStud,visible } = this.state;
    // console.log(StudentRecord);

    return (
      <View style={[basic.container]}>
        <Text style={[form.SaerchHeading, form.field]}>Enroll New Student</Text>

        <Select2
          isSelectSingle
          style={{ borderRadius: 5 }}
          colorTheme="green"
          popupTitle="Select Student"
          title="Select Student"
          data={StudentRecord}
          onSelect={(data) => {
            this.setState({ data });
          }}
          onRemoveItem={(data) => {
            this.setState({ data });
          }}
        />
        <Image source={{ uri: `${SingleStud ? SingleStud.image : ""}` }} style={basic.StudentPhoto} />

        <View>
          <Text style={form.SaerchHeading}>
            {SingleStud ? SingleStud.fullname : ""}

          </Text>
        </View>

        <View style={form.field}>
          
            <TouchableOpacity
            onPress={()=>this.handleSubmit(SingleStud)} style={form.button}>
             <Text style={form.buttonText}>
             
             Enroll
            
             </Text>
       

           <FancyAlert
    style={styles.alert}
    icon={
      <View style={[ styles.icon, { borderRadius: 32 } ]}>
        <Ionicons
          name={Platform.select({ ios: 'ios-close', android: 'md-close' })}
          size={36}
          color="#FFFFFF"
        />
      </View>
    }
    // onRequestClose={this.onRequestClose}
    visible={visible}
  >
    <View style={styles.content}>
      <Text style={styles.contentText}>{message}</Text>
      <TouchableOpacity onPress={() => this.closeModal()} style={styles.btn}>
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  </FancyAlert>
   </TouchableOpacity>
  </View>
 
        {/* <View style={form.field}>
          <Text style={form.label}>Address:</Text>
          <TextInput
            // onChangeText={value => setUsername(value)}
            // name="username"
            style={form.input}
            value={SingleStud.residential_address ? SingleStud.residential_address!=null : "---null--"}
            autoCapitalize="none"
          />
        </View> */}
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