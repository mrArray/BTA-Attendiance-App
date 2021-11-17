//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
import axios from "axios";
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
  import { Ionicons } from '@expo/vector-icons';

  import  AsyncStorage  from "@react-native-async-storage/async-storage";
import * as SQLite from 'expo-sqlite';
import Students from '../Models/Students';
import Attendance from '../Models/Attendance';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { basic, form, colors } from "../components/styles";

export default class PushRecord extends PureComponent {

    //Define your state for your component. 
    state = {
        //Assing a array to your List state
        StudentList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        visible:false,
        message:""

    }
    
    closeModal() {
        this.setState({
            visible : false
        });
      }
    componentDidMount() {


      try {
        AsyncStorage.getItem('LOGGIN_USER')
        .then(value => {
          const user=JSON.parse(value);

          Attendance.get_AttendedStudents()
          .then(res => {
          const stud = res

            // console.log(stud)
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();

              today = yyyy + '-' + mm + '-' +dd ;

            // console.log(today);
      
            stud.forEach(element => {
                    let formData = new FormData();
                    formData.append('username', element.username);
                    formData.append('entrance_timestamp', element.timestamp);
                    formData.append('date_for', today);
                    formData.append('present', element.present);
                    // console.log(new Date().toISOString());
                    // console.log(formData);
                              
             axios.post("https://bigtrustacademy.com/accounts/api/create/daily/attendance/",formData,
             {
                 headers:
                 {
                     'Authorization': `Token ${user.token}`,
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
                     'Access-Control-Allow-Credentials': true
                 },
             })
     
             .then(res => {
               const stud = "all record Successefully Pushed"
            //    console.log(res.data.detail);
               this.setState({
                visible : true,
                message:stud,
                loading: false,
                StudentList: stud
               });
                  
             })
          })
     
     })

           })
             } catch (error) {
                 console.log(error);
             }
             
             
         
  }
  

  

   


    //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'white'}}>
                    <View  style={styles.listItemContainer}>
                    <Text style={styles.pokeItemHeader}>{data.item.fullname}</Text>
                        <Image source={{uri:`${data.item.image}`}} 
                                style={styles.pokeImage}/>
                    </View>
                </TouchableOpacity>
    }
    render() {

        //Destruct pokeList and Loading from state.
        const { StudentList, message, visible, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FancyAlert
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
        } else {
            return <ActivityIndicator   size="large" color={"primary"} />

           
                
        }
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
  listItemContainer: {
      borderStyle: 'solid',
      borderColor: '#000',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
  },
  pokeItemHeader: {  
      color: '#000',
      fontSize: 15,
  },
  StudentAddress: {  
    color: '#000',
    fontSize: 7,
},
  pokeImage: {
      backgroundColor: 'transparent',
      height: 50,
      width: 50
  }
})







// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,
//   ActivityIndicator
//  } from 'react-native';
// import React, { useState, useEffect } from "react";
// import  AsyncStorage  from "@react-native-async-storage/async-storage";
// import axios from "axios";


// const StudentsList = () => {


//      const [student, setStudent] = useState({});
//      const [myloading, setLoading] = useState([true]);

//      const mytoken =AsyncStorage.getItem('LOGGIN_USER');
//      const token = mytoken.token;

//      const GetStudentRecord = () => {
//           setLoading(true);
//           axios
//                .get("https://bigtrustacademy.com/accounts/api/list/profile/?user_type=student",
//                     {
//                          headers:
//                          {
//                               'Authorization': `Basic ${token}`,
//                               'Access-Control-Allow-Origin': '*',
//                               'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
//                               'Access-Control-Allow-Credentials': true
//                          },
//                     })
//                .then(res => {
//                     const student = res.data;
//                     setStudent(student);
//                     setLoading(false);

//                });
//      }

//      //using the functions
//      useEffect(() => {  
//       GetStudentRecord();
//      }, []);

//     //  const renderItem = ({ item }) => (
//     //   <Item title={item.title} />
//     // );

//     // const Item = ({ title }) => (
//     //   <View style={styles.item}>
//     //     <Text style={styles.title}>{title}</Text>
//     //   </View>
//     // );
    


//   return (
//     <Text>

//     {myloading &&

//       <SafeAreaView style={styles.container}>
       

//       <ActivityIndicator color={"#000"} />
              
//       <FlatList
//         data={student}
//       />
     
                

//     </SafeAreaView>
//       }
//               </Text >

//      );
// };

// export default StudentsList;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });