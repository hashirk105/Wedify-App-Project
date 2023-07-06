import { View, Text,Dimensions} from 'react-native'
import React from 'react'
const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const Event = (props) => {
  return (
    <View >
      <View style={{backgroundColor:"#FBF8F2", height:height*0.2, shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 1, marginHorizontal:width*0.08,marginVertical:height*0.017, borderRadius:width*0.05}}>
            <View style={{display:"flex",margin:width*0.03, gap:height*0.015}}>
                <Text style={{fontSize:15, color:"black", fontFamily:"DMSerifDisplay-Regular",}}>Upcoming</Text>
                <Text style={{fontSize:28, color:"black", fontFamily:"DMSerifDisplay-Regular",}}>{props.func}</Text>
            </View>
            <Text style={{margin:width*0.03, fontSize:12,fontFamily:"Montaga-Regular", color:"black"}}>{props.date}</Text>
            <View style={{marginHorizontal:width*0.03, display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text  style={{color:"black", fontFamily:"Montaga-Regular"}}>{props.time}</Text>
                <Text style={{color:"black", fontFamily:"Montaga-Regular"}}>{props.marquee}</Text>
            </View>
      </View>
    </View>
  )
}

export default Event