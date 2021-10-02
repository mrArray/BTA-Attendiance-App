//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
import axios from "axios";
import { View,Image, StyleSheet, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import * as SQLite from 'expo-sqlite';
import Students from '../Models/Students';


export default class StudentsList extends PureComponent {

    //Define your state for your component. 
    state = {
        //Assing a array to your List state
        StudentList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
    }
    

    componentDidMount() {


      try {
        AsyncStorage.getItem('LOGGIN_USER')
        .then(value => {
          const user=JSON.parse(value);
          
        //   console.log(user.token)
          axios.get("https://bigtrustacademy.com/accounts/api/list/profile/?user_type=student",
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
            const stud = res.data
            console.log(stud)

            this.setState({

                StudentList: stud, 
                loading: false});

                Students.createTable()
                stud.forEach(element => {
                    element.enrolled='no'
                    Students.create(element)


                    // console.log(element)
                });
               
                // 17827827aH
          })


        })
          } catch (error) {
              console.log(error);
          }
          
          //insert into 
         
        //   for ( i=0 ;i<props.length;i++){
        //     Students.create(props[i])
        //     console.log(props[i]);
        //   }
           
         
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
        const { StudentList, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={StudentList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.username} 
                    />
        } else {
            return <ActivityIndicator   size="large" color={"primary"} />

           
                
        }
    }
}



const styles = StyleSheet.create({
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