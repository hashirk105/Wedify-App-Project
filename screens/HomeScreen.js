import { View, Text,StyleSheet, Dimensions,Image, TouchableOpacity} from 'react-native'
import React from 'react'
const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const HomeScreen = () => {
  const pressed = () =>{
    console.log("SAdasd")
}
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.text1}>Welcome</Text>
      </View>
      <View style={styles.secondView}>
        <Image
          source={require('../assets/backgroundImg3.png')} 
          style={styles.image}
        />
        <View style={styles.thirdView}>
          <View style={styles.fourthView}>
              <Text style={styles.text3}>HELLO, HASSAN!</Text>
              <Text style={styles.text2} >
                Welcome to Our Wedding Planner App!
                
              </Text>
              
              <Text style={styles.text4}>
                  Where you can plan, personalize, and budget your dream wedding!
              </Text>
          </View>
          <View style={styles.fifthView}>
          <TouchableOpacity onPress={pressed} style={styles.but1}>
                <Text style={styles.text5}>Get Started!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    display:"flex", 
    alignItems:"center",
    justifyContent:"center"
  },
  text1:{
    fontSize:20,
    fontFamily:"DMSerifDisplay-Regular",
    color:"#BFA054",
    letterSpacing:width*0.02,
    textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  secondView:{

      marginTop:height*0.1,
    justifyContent:"center",
    alignItems:"center"
  },
  
  thirdView:{

    display:"flex",
    position:"absolute",
    top:"34%",
    alignItems:"center", justifyContent:"space-between"
    , gap:height*0.05
  },
  fourthView:{
    
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly",
    gap:height*0.004
    
  }, text3:{
    fontSize:40,
    fontFamily:"Poppins-Regular",
    color:"black", 
    
    textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  text2:{
    fontFamily:"Montaga-Regular",
    fontSize:20, color:"black",

  },
  text4:{
    fontFamily:"Montaga-Regular",
    fontSize:17, color:"grey",
    textAlign:"center"
  },
  but1:{
    backgroundColor:"#9A2143",
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    width:width*0.35,
    height:height*0.05,
    alignItems:"center",
    justifyContent:"center"

  }, fifthView:{
    display:"flex",
    alignItems:"center",
    
  },
  text5:{
    fontSize:16, color:"white",
    fontFamily:"DMSerifDisplay-Regular", textAlign:"center"
  }
})


export default HomeScreen