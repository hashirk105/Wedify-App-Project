import { View, Text, Dimensions,Image,StyleSheet } from 'react-native'
import React from 'react'
const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const Decor= (props) => {
  return (
    <View >
      <View style={[styles.card, styles.cardElevated]}>
        <Image style={styles.image} source={props.img}/>
        <View style={styles.cardBody}>
            <View style={styles.cardTitle}>
              <Text style={styles.title1}>{props.title}</Text>
              <Text style={styles.title2}>{props.price}</Text>
              

            </View>
            
        </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    card:{
        
        width:width*0.8,
        height: height*0.4, 
    }, cardElevated:{
      borderRadius:20,  
        
        marginRight:width*0.04
    },
    cardBody:{
        marginTop:height*0.02,
        justifyContent:"space-evenly",
        gap:height*0.008
    },
    image:{
      height:height*0.32,
      width:width*0.8
    }, cardTitle:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      
      
      textAlign:"center"
    },

    title1:{
      fontSize:21.47,
      color:"black",
      fontFamily:"DMSerifDisplay-Regular"
    },
    title2:{
      fontSize:13,
      marginTop:height*0.006,
      fontFamily:"Montaga-Regular"
    },
    
})

export default Decor