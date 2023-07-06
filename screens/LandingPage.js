import { View, Image, StyleSheet, Dimensions, StatusBar,Text, TouchableOpacity } from 'react-native'
import React from 'react'
const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const LandingPage = ({navigation}) => {
    const pressed1 = () =>{
        navigation.navigate('adminlogin')
    }
    const pressed2 = () =>{
      navigation.navigate('userlogin')
  }

  
  return (
    <>
    <StatusBar hidden/>
    <View >
      <Image
        source={require('../assets/backgroundImg.png')} 
        style={styles.image}
      />
      <View style={styles.mainView}>
        <View>
            <Text style={styles.text}>Wedify</Text>
        </View>
        <View>
            <Text style={styles.text2}>Wedding Inspirations</Text>
            <Text style={styles.text2}>Discover Your Dream Celebration</Text>
        </View>
        <View>
            <TouchableOpacity onPress={pressed1} style={styles.but1}>
                <Text style={styles.text3}>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressed2} style={styles.but2}>
                <Text style={styles.text4}>User</Text>
            </TouchableOpacity>
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
    mainView:{
        display:"flex",
        justifyContent:"space-between",
        gap:height*0.05,
        alignItems:"center",
        position: 'absolute',
        top: '30%',
        justifyContent:"center",
        left:"17%",


    },
    text: {
       fontSize:44,
       fontFamily: "DMSerifDisplay-Regular",
       color:"#BFA054"
      },
      text2:{
        fontFamily: "Montaga-Regular",
        fontSize:18,
        textAlign:"center",
        color:"black",
        marginTop:height*0.01
      }
      ,but1:{
        backgroundColor:"#9A2143",
        borderWidth:1,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        width:width*0.35,
        height:height*0.05,
        alignItems:"center",
        justifyContent:"center"

      }
      ,but2:{
        backgroundColor:"white",
        borderWidth:1,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        width:width*0.35,
        borderColor:"#9A2143",
        height:height*0.05,
        alignItems:"center",
        justifyContent:"center",
        marginTop:height*0.016

      },
      text3:{
        fontSize:17,
        fontFamily:"DMSerifDisplay-Regular",
        color:"white"
      },
      text4:{
        fontSize:17,
        fontFamily:"DMSerifDisplay-Regular",
        color:"#9A2143"
      }
    
  });

export default LandingPage