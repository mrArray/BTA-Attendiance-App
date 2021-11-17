import React from "react";

// Screens
import Login from "../screens/Login";
import Signup from '../screens/Signup';
import Welcome from "../screens/Welcome";
import Landing from "../screens/Landing";
import Enroll from "../screens/Enroll";
import Setting from "../screens/Setting";
import StudentsList from "../screens/StudentsList";
import TakeAttendance from "../screens/TakeAttendance";
import ViewAttendance from "../screens/ViewAttendance";
import PushRecord from "../screens/PushRecord";
import About from "../screens/About";



// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom styles
import { colors } from "../components/styles";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "BIG TRUST ACADEMY",
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: "transparent",
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOffset: {
                height: 0,
            },
            
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
              letterSpacing: 1,
              padding: 15,
              fontSize: 15,
          }
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Enroll" component={Enroll} />
        <Stack.Screen name="TakeAttendance" component={TakeAttendance} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="PushRecord" component={PushRecord} />
        <Stack.Screen name="ViewAttendance" component={ViewAttendance} />
        <Stack.Screen name="StudentsList" component={StudentsList} />
        
        <Stack.Screen options={{headerMode: 'none', headerShown: false}} name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
