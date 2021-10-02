// import styled from  'styled-components';
// import {View,Text,Image} from 'react-native';
// import Constants from 'expo-constants'


// const StatusBarHeight =Constants.statusBarHeight;

// //colors
// export const Colors ={
//      primary:'#ffffff',
//      secondary:'#E5E7EB',
//      tertiary:'#1F2937',
//      darkLight:'#9CA3AF',
//      brand:'#6D28D9',
//      green:'#10B981',
//      red:'#EF4444'
// };
// const {primary,secondary,tertiary,darkLight,brand,green,red}=Colors;

// export const SyledContainer= styled.View`
//      flex:1;
//      padding:25px;
//      padding-top:${StatusBarHeight +10}px;
//      background-color:${primary};
// `
// export const InnerContainer = styled.View`
//      flex:1;
//      width:100;
//      align-items:center
// `;
// export const ScreenLogo = styled.Image`
//      width:250px;
//      height:200px;

// `
// export const ScreenTitle = styled.Text`
//      font-size:30px;
//      text-align:center;
//      font-weight:bold;
//      color:${brand};
//      padding:10px;
// `;

import { StyleSheet } from "react-native";

export const colors = {
  primary: "#fff",
  secondary: "#adadad",
  success: "#00FF00",
  darkBlue:'#00008B',
  tertiary: "#057afd",
  alternative: "#666",
  fb: "#39559f",
  disabled: "rgba(5, 122, 253, 0.5)"
};


export const basic = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "contain"
  },
  LoginLogo: {
    width: "70%",
    height: "70%",
    flex:1,
    alignSelf:"center",
    resizeMode: "contain"
  },
  StudentPhoto: {
    width: "30%",
    height: "40%",
    flex:0,
    alignSelf:"center",
    resizeMode: "contain"
  },
  
});

export const form = StyleSheet.create({
  field: {
    padding: 15,
    paddingVertical: 14,
    position: "relative"
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 0
  },
  SaerchHeading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 0
  },
  label: {
    color: colors.secondary
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingVertical: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 15
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 25,
    color: colors.secondary,
    padding: 20,
    paddingRight: 15
  },
  terms: {
    fontWeight: "bold",
    color: colors.tertiary,
    fontSize: 16,
    padding: 5
  },
  button: {
    borderRadius: 5,
    alignContent: "center",
    backgroundColor: colors.tertiary,
    padding: 15
  },
  buttonSuccess: {
    
    borderRadius: 5,
    alignContent: "center",
    backgroundColor: colors.darkBlue,
    padding: 15
  },
  disabled: {
    backgroundColor: colors.disabled
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 15
  },
  button1: {
    backgroundColor: colors.primary,
    padding: 15
  },
  field1: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: colors.secondary,
    fontSize: 15
  },
  buttonText1: {
    fontWeight: "bold",
    color: colors.tertiary,
    fontSize: 15
  },
  google: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 1
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 15,
    paddingLeft: 0
  },
  fb: {
    backgroundColor: colors.fb
  },
  message: {
    textAlign: "center",
    fontSize: 13,
    color: "tomato"
  }
});