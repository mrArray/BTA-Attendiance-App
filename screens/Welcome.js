
import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

import { Ionicons,MaterialIcons,FontAwesome5 ,Entypo,Fontisto,AntDesign} from '@expo/vector-icons';


  const Welcome = ({ navigation }) => {



    return(
      <View style={style.container}>

        <TouchableOpacity onPress={() => navigation.navigate('Enroll')}style={style.box}>
            <View style={style.inner}>
            <Entypo name="fingerprint" size={150} color="black" />
              <Text >    Enroll   </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Landing')}style={style.box}>
            <View style={style.inner}>
            <Ionicons name="camera" size={150} color="green" />
              <Text>    Take Attendance  </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Landing')}style={style.box}>
            <View style={style.inner}>
            <Fontisto name="preview" size={150} color="blue" />
              <Text>   View Attendance   </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Setting')}style={style.box}>
            <View style={style.inner}>
            <Ionicons name="settings-outline" size={150} color="purple" />
                          <Text>    Settings    </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Landing')}style={style.box}>
            <View style={style.inner}>
            <Ionicons name="information-circle-outline" size={150} color="grey" />
                          <Text>    About     </Text>
            </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Landing')}style={style.box}>
            <View style={style.inner}>
            <AntDesign name="logout" size={110} color="red" />
                          <Text>    Logout   </Text>
            </View>
           </TouchableOpacity>

      </View>
    )
  }
  export default Welcome;

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






// import React, { Component } from "react";
// import  AsyncStorage  from "@react-native-async-storage/async-storage";

// // UI elements
// import { View, Text, TouchableOpacity, Image } from "react-native";
// // Custom styles
// import { basic, form } from "../components/styles";

// export default class Welcome extends Component {

//   constructor(props) {
//       super(props);
      
//       this.state = {
          
//         jsonValue: [],
          
//       };
//   }
  

//   componentDidMount() {
    
//     try {
//       AsyncStorage.getItem('LOGGIN_USER')
//           .then(value => {
//             const data=JSON.parse(value);
//               this.setState({
//                 jsonValue: data.profile,
//                 Image:data.profile.image
//               })
//           })
//   } catch (error) {
//       console.log(error);
//   }
// }
  
//   render() {

//     return (
//       <>
//       <Image 
//       source={{ uri: `${this.state.Image}` }}
//        style={basic.image} />

//         <View style={basic.container}>
//           <View>
//             <View style={form.field}>
//               <Text style={form.heading}>Welcome to BigTrust Academy !</Text>
//               <Text style={[form.text, { paddingVertical: 10, lineHeight: 25 }]}>
//                 We appreciate you taking the time for downloading our app and
//                 evaluating us.
//               </Text>
//             </View>
//             <View style={form.field}>
//               <TouchableOpacity
//                 onPress={() => alert(this.state.jsonValue.residential_address,"Thank you!")}
//                 style={form.button}
//               >
//                 <Text style={form.buttonText}>Continue</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </>
//     );
// }
// }

 






