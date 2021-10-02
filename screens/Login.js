import React, { useState } from "react";
import axios from "axios";

// UI elements
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Image
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";
import { basic, form, colors } from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successful, setSuccessful] = useState(false);


  
  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    setSuccessful(false);
  
    axios.post("https://bigtrustacademy.com/accounts/api/jwt/",{
      username,
      password,
    },
    {
          headers:
            {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
                'Access-Control-Allow-Credentials': true
            },
        }
      )
        .then(res => {
          //  window.location = "/dashboard"

          if (res.data) {
            const jsonValue=res.data;
            const JsonUser = JSON.stringify(jsonValue)
            AsyncStorage.setItem('LOGGIN_USER',JsonUser)
            navigation.navigate("Welcome");
          }
          setSuccessful(true);
          setMessage(res.data.non_field_errors);
        },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data.non_field_errors &&
                error.response.data.non_field_errors) ||
              error.message ||
              error.toString();

              setSuccessful(false);
            setLoading(false);
            setMessage(resMessage);
          }
        );
      // setLoading(false);
  };
 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[basic.container]}>

        {/* heading */}
        <Text style={[form.heading, form.field]}>Log In</Text>

        <Image source={require("../assets/bigtrust.png")} style={basic.LoginLogo} />
        <Text style={form.message}>{message}</Text>

        {/* form start */}
       
        <View style={form.field}>

          {/* username */}
          <Text style={form.label}>username</Text>
          <TextInput
            type="username"
            value={username}
            onChangeText={(username) => setUsername(username)}
            style={form.input}
            autoCapitalize="none"
          />
        </View>

        <View style={form.field}>
          {/* password */}
          <Text style={form.label}>Password</Text>
          <TextInput
            type="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={form.input}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />

          {/* button login */}
          <Ionicons
            onPress={() => setShowPassword(!showPassword)}
            style={form.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>

        {/* <View style={form.field}>
          <CheckBox
            onClick={() => setTermsCheck(!termsCheck)}
            isChecked={termsCheck}
            checkBoxColor={colors.secondary}
            checkedCheckBoxColor={colors.tertiary}
            rightText={"Terms & Conditions"}
            rightTextStyle={form.terms}
          />
        </View> */}

        <View style={form.field}>
          
            <TouchableOpacity onPress={handleLogin} style={form.button}>
             

              <Text style={form.buttonText}>
             
                Login
                {loading &&
                <ActivityIndicator color={"#fff"} />
              }
                
                </Text>
               
            </TouchableOpacity>
        

          {/* {!termsCheck && (
            <TouchableOpacity
              disabled
              onPress={handleLogin}
              style={[form.button, form.disabled]}
            >
               {loading &&

         <Text style={form.buttonText}>
  
           Login
  
  <ActivityIndicator color={"#fff"} />
  
  
  </Text>
 }
            </TouchableOpacity>

          )} */}

        </View>

       

        {/* sign Up pagae */}
        <View style={[form.field, form.field1]}>
          <Text style={form.text}>You don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={form.field}>
          <TouchableOpacity style={[form.button, form.google]}>
            <AntDesign
              style={form.icon}
              size={35}
              color={colors.tertiary}
              name="google"
            />
            <Text style={[form.buttonText, { color: colors.alternative }]}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={form.field}>
          <TouchableOpacity style={[form.button, form.fb]}>
            <FontAwesome
              style={form.icon}
              size={35}
              color={colors.primary}
              name="facebook"
            />
            <Text style={form.buttonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;



// import React, { useState } from "react";
// import axios from "axios";

// // UI elements
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard
// } from "react-native";
// import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
// import CheckBox from "react-native-check-box";

// // Custom styles
// import { basic, form, colors } from "../components/styles";

// const Login = ({ navigation }) => {
//   const [email, setemail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [termsCheck, setTermsCheck] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [successful, setSuccessful] = useState(false);


//   const onChangeemail = (e) => {
//     const email = e.target.value;
//     setemail(email);
//   };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setMessage("");
//     setLoading(true);
//     setSuccessful(false);


//     axios.post("https://api.settrack.ng/api/v1/auth/login",    {
//           email,
//           password,
//         },{
//           headers:
//             {
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
//                 'Access-Control-Allow-Credentials': true
//             },
//         }
        
//       )
//         .then(res => {
//           //  window.location = "/dashboard"
//           navigation.navigate("Welcome");

//           if (res.data) {
//             localStorage.setItem("user", JSON.stringify(res.data));
//           }
//           setSuccessful(true);

//         },
//           (error) => {
//             const resMessage =
//               (error.response &&
//                 error.response.data.non_field_errors &&
//                 error.response.data.non_field_errors) ||
//               error.message ||
//               error.toString();

//               setSuccessful(false);
//             setLoading(false);
//             setMessage(resMessage);
//           }
//         );
//       setLoading(false);

//   };


//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={[basic.container]}>

//         {/* heading */}
//         <Text style={[form.heading, form.field]}>Log In</Text>
//         <Text style={form.message}>{message}</Text>

//         {/* form start */}
       
//         <View style={form.field}>

//           {/* email */}
//           <Text style={form.label}>email</Text>
//           <TextInput
//             type="email"
//             className="form-control"
//             // name="email"
//             value={email}
//             onChange={onChangeemail}
//             style={form.input}
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={form.field}>
//           {/* password */}
//           <Text style={form.label}>Password</Text>
//           <TextInput
//             type="password"
//             className="form-control"
//             // name="password"
//             value={password}
//             onChange={onChangePassword}
//             style={form.input}
//             secureTextEntry={!showPassword}
//             autoCapitalize="none"
//           />

//           {/* button login */}
//           <Ionicons
//             onPress={() => setShowPassword(!showPassword)}
//             style={form.eye}
//             name={showPassword ? "md-eye-off" : "md-eye"}
//           />
//         </View>

//         <View style={form.field}>
//           <CheckBox
//             onClick={() => setTermsCheck(!termsCheck)}
//             isChecked={termsCheck}
//             checkBoxColor={colors.secondary}
//             checkedCheckBoxColor={colors.tertiary}
//             rightText={"Terms & Conditions"}
//             rightTextStyle={form.terms}
//           />
//         </View>

//         <View style={form.field}>
//           {termsCheck && (
//             <TouchableOpacity onPress={handleLogin} style={form.button}>
//               <Text style={form.buttonText}>Login</Text>
//             </TouchableOpacity>
//           )}

//           {!termsCheck && (
//             <TouchableOpacity
//               disabled
//               onPress={handleLogin}
//               style={[form.button, form.disabled]}
//             >
//               <Text style={form.buttonText}>Login</Text>
//             </TouchableOpacity>
//           )}
//         </View>

       

//         {/* sign Up pagae */}
//         <View style={[form.field, form.field1]}>
//           <Text style={form.text}>You don't have an account?</Text>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("Signup")}
//             style={form.button1}
//           >
//             <Text style={form.buttonText1}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <View style={form.field}>
//           <TouchableOpacity style={[form.button, form.google]}>
//             <AntDesign
//               style={form.icon}
//               size={35}
//               color={colors.tertiary}
//               name="google"
//             />
//             <Text style={[form.buttonText, { color: colors.alternative }]}>
//               Login with Google
//             </Text>
//           </TouchableOpacity>
//         </View> */}
//         {/* <View style={form.field}>
//           <TouchableOpacity style={[form.button, form.fb]}>
//             <FontAwesome
//               style={form.icon}
//               size={35}
//               color={colors.primary}
//               name="facebook"
//             />
//             <Text style={form.buttonText}>Login with Facebook</Text>
//           </TouchableOpacity>
//         </View> */}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default Login;