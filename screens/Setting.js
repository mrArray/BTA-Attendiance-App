
import {StyleSheet,Text,View,TouchableOpacity, Settings} from 'react-native'
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

import { Ionicons,MaterialIcons,FontAwesome5 ,Entypo,Fontisto,AntDesign} from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import Students from '../Models/Students';

import { BioSample, FingerPosition } from '@digitalpersona/core';
import { EnrollmentContext, FingerprintsEnroll } from '@digitalpersona/enrollment';



  const Setting = ({ navigation }) => {
    //  const [student, setStudent] = useState({});

    // const GetStudentRecord =  async ()  => {

    //   const student =  await Students.get_StudentsList();

    //   setStudent(student);
    //   console.log(student);

    // };

    

    useEffect(() => {
       Students.dropTable()
      .then(res=>{

          console.log(res);
  
        }
        
      )
  
      //  Students.get_StudentsList()
      // .then(res=>{

      //   console.log(res);

      // }


      // )
       

      
    }, []);


    return(
      <View style={style.container}>

           <TouchableOpacity onPress={() => navigation.navigate('StudentsList')}style={style.box}>
            <View style={style.inner}>
            <Ionicons name="download" size={50} color="green" />
              <Text>Get Record</Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('PushRecord')}style={style.box}>
            <View style={style.inner}>
            <Entypo name="upload" size={50} color="blue" />
              <Text > Push Record</Text>
            </View>
           </TouchableOpacity>

           <View style={style.inner}>
              {/* <Text > 
               
              <Text >{student[0].username} </Text>
              
           
              </Text> */}
            </View>

      </View>
    )
  }
  export default Setting;













const style = StyleSheet.create({

  container:{
    width:'100%',
    height:'67%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap', 
  },
  box:{
    width:'50%',
    height:'50%',
    padding:5,
  },
  inner:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }

});











