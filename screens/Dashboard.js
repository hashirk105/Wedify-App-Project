import { View, Text, ScrollView, Dimensions,Image,StyleSheet} from 'react-native'
import React from 'react'
import Event from './Event'
const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

export default function Dashboard() {
  return (
    
    <ScrollView>
        <View style={{backgroundColor:"white",height:"100%"}}>
              <Image
                source={require('../images/dash.png')} 
                style={styles.image}
              />
            <View style={styles.first}>
              <Text style={styles.firstT}>DASHBOARD</Text>
            </View>
            <View style={styles.second}>
              <Text  style={styles.secondT}>HELLO,</Text>
              <Text style={styles.secondT}>HASSAAN!</Text>
            </View>
            <View style={styles.third}>
              <Text style={{fontSize:13}}>View all your upcoming events and their details!</Text>
            </View>

            <Event func={"Mayoon"} date={"4th June, 2023"} time={"7:30 pm"} marquee={"Empire Marquee"}/>
            <Event func={"Mehndi"} date={"22nd September, 2023"} time={"2:30 pm"} marquee={"Gold Marquee"}/>
            <Event func={"Barat"} date={"11th August, 2023"} time={"7:00 pm"} marquee={"Grand Peard Marquee"}/>
            <Event func={"Walima"} date={"30th July, 2023"} time={"8:30 pm"} marquee={"Orchid Marquee"}/>

            

        </View>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
  image:{
    width:"100%"
    
    
  },
  first:{
    position:'absolute',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    
    width:"100%", marginTop:height*0.02
  },
  second:{
    position:"absolute",
    display:"flex",
    marginLeft:width*0.1,
    justifyContent:"center",
    
    width:"100%", marginTop:height*0.12
  },
  firstT:{
    textAlign:"center",
    fontSize:20,
    fontFamily:"DMSerifDisplay-Regular",
    color:"#BFA054",
    letterSpacing:width*0.02,
    textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  secondT:{
    fontSize:30,
    fontFamily:"Poppins-Regular",
    color:"black", fontWeight:"900",
    textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  }, 
  third:{
    position:"absolute",
    display:"flex",
    marginLeft:width*0.1,
    justifyContent:"center",
    
    width:"40%", marginTop:height*0.23
  }
})
