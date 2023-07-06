import { View, Image, StyleSheet, Dimensions, StatusBar, Text, TouchableOpacity, TextInput ,Alert} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SignUpUser = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const presss = ()=>{
    navigation.navigate("userlogin")
  }

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);

    
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,

       
      };
      await firestore().collection('users').doc(user.uid).set(userData);

      Alert.alert('Registration successful!','User has been registered');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate("userlogin");
    } catch (error) {
      Alert.alert('Registration failed', error.message);
    }
  };


  // const signUp = () => {
    
  //   const isFieldEmpty = (field) => {
  //     if (!field) {
  //       alert("Please fill in all fields");
  //       setFirstName('');
  //       setLastName('');
  //       setEmail('');
  //       setPassword('');
  //       setConfirmPassword('');
  //       return true;
  //     }
  //     return false;
  //   };
  
  //   if (isFieldEmpty(firstName) || isFieldEmpty(lastName) || isFieldEmpty(email) || isFieldEmpty(password) || isFieldEmpty(confirmPassword)) {
  //     return;
  //   }
  
  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match");
  //     setPassword('');
  //     setConfirmPassword('');
  //     return;
  //   }

  //   auth().
  //   createUserWithEmailAndPassword( email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       // Handle successful user creation
  //       const user = userCredential.user;
  
  //       // Create a collection in Firestore and add a document
  //       const userCollectionRef = collection(db, 'users');
  //       const newUser = {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //       };
  //       addDoc(userCollectionRef, newUser)
  //         .then(() => {
  //           alert("User added successfully!");
  
  //           // Reset the form fields
  //           setFirstName('');
  //           setLastName('');
  //           setEmail('');
  //           setPassword('');
  //           setConfirmPassword('');

  //           navigation.navigate("User Login")
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //           alert("An error occurred while adding the user. Please try again.");
  
  //           // Reset the form fields
  //           setFirstName('');
  //           setLastName('');
  //           setEmail('');
  //           setPassword('');
  //           setConfirmPassword('');
  //         });
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/invalid-email") {
  //         alert("Invalid email. Please check your email and try again.");
  //       } else if (error.code === "auth/wrong-password") {
  //         alert("Invalid password. Please check your password and try again.");
  //       } else {
  //         alert("Login error. Please try again.");
  //       }
  
  //       // Reset the form fields
  //       setFirstName('');
  //       setLastName('');
  //       setEmail('');
  //       setPassword('');
  //       setConfirmPassword('');
  //     });
  // }
  
  
  

  return (
    <>
      <StatusBar hidden />
      <View>
        <Image
          source={require('../assets/backgroundImg2.png')}
          style={styles.image}
        />
        <View style={styles.mainView}>
          <View>
            <Text style={styles.text}>Sign Up</Text>
          </View>
          <View>
            <View style={styles.innerView}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>
          <View style={styles.check}>
            <TouchableOpacity onPress={handleRegister} style={styles.but1}>
              <Text style={styles.text3}>Register</Text>
            </TouchableOpacity>
            <View style={styles.lastView}>
              <Text style={styles.last1}>Already have an account?</Text>
              <Text onPress={presss} style={styles.last2}>Log In</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  mainView: {
    display: "flex",
    justifyContent: "space-between",
    gap: height * 0.05,
    alignItems: "center",
    position: 'absolute',
    top: '15%',
    justifyContent: "center",
    left: "13.2%",
  },
  check: {
    alignItems: "center",
  },
  text: {
    fontSize: 44,
    fontFamily: "DMSerifDisplay-Regular",
    color: "#BFA054"
  },
  text2: {
    fontFamily: "Montaga-Regular",
    fontSize: 18,
    textAlign: "center",
    color: "black",
    marginTop: height * 0.01
  },
  but1: {
    backgroundColor: "#9A2143",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: width * 0.35,
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  but2: {
    backgroundColor: "white",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: width * 0.35,
    borderColor: "#9A2143",
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.016
  },
  text3: {
    fontSize: 17,
    fontFamily: "DMSerifDisplay-Regular",
    color: "white"
  },
  text4: {
    fontSize: 17,
    fontFamily: "DMSerifDisplay-Regular",
    color: "#9A2143"
  },
  input: {
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#9A2143",
    width: width * 0.72,
    fontFamily: "Montaga-Regular",
    fontSize: 16,
    paddingLeft: width * 0.05
  },
  innerView: {
    display: "flex",
    gap: height * 0.023
  },
  lastView: {
    display: "flex",
    flexDirection: "row",
    gap: width * 0.01,
    marginTop: height * 0.01,
    textAlign: "center"
  },
  last1: {
    color: "black",
    fontSize: 15,
    fontFamily: "Montaga-Regular"
  },
  last2: {
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Montaga-Regular",
    color: "#9A2143"
  }
});

export default SignUpUser;
