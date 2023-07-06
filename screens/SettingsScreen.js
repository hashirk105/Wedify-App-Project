import { View, Text, Dimensions, StyleSheet,Image, Modal, TouchableOpacity , ScrollView,TextInput} from 'react-native'
import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';

const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const SettingsScreen = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false)
  const [dateString, setDateString] = useState("")
  const [timeString, setTimeString] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [guests, setGuests] = useState(0)


  const [mySelectedList, setMySelectedList] = useState("")
  const data = [
      {key:'1', value:"Dholki"},
      {key:'2', value:"Mayoon"},
      {key:'3', value:"Mehndi"},
      {key:'4', value:"Barat"},
      {key:'5', value:"Walima"},
      
  ]



  const pressed = () => {
    setShowModal(!showModal)
    setShowDate(!showDate)

  }
  const showTimePicker = () => {
    setShowPicker(true);
  };

  const handleTimeChange = (event, selected) => {
    setShowPicker(false);
    if (selected) {
      setSelectedTime(selected);
      setTimeString(true)
      // Do something with the selected time
    }
  };
  return (
    <ScrollView>
    <View style={{backgroundColor:"white"}}>
      <Image
          source={require('../images/backgroundImg4.png')} 
          style={styles.image}
        />
      <View style={styles.first}>
        <Text style={styles.firstT}>REGISTER</Text>
      </View>


      <View style={styles.s}>   
          <View style={styles.second}>
            <View style={{display:"flex", gap:height*0.023}}>
                <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Booking Date</Text>
                <TouchableOpacity onPress={pressed} style={styles.but1}>
                        <Text style={styles.text5}>Choose Date</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={showModal} animationType='fade'>
              <Calendar style={{borderRadius:10, elevation:4, margin:20,}} onDayPress={date => {
                console.log(date.dateString)
                setShowModal(!showModal)
                setDateString(date.dateString)
              }}/>
            </Modal>
            {showDate && <Text style={{fontSize:40, color:"black", textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily:"DMSerifDisplay-Regular"}}>{dateString}</Text>
}

            <View style={{display:"flex", gap:height*0.023}}>
                <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Booking Time</Text>
                <TouchableOpacity onPress={showTimePicker} style={styles.but1}>
                        <Text style={styles.text5}>Pick Time</Text>
                </TouchableOpacity>
            </View>


          {showPicker && (
            <DateTimePicker
            value={selectedTime}
            mode="time"
            display={Platform.OS === 'android' ? 'default' : 'spinner'}
            onChange={handleTimeChange}
            style={{ color: 'red' }}
            />
          )}
          {timeString && <Text style={{fontSize:40, color:"black", textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily:"DMSerifDisplay-Regular"}}>{selectedTime.toLocaleTimeString()}</Text> }
          

              <View style={{display:"flex", gap:height*0.023}}>
                  <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Event</Text>
                  <SelectList style={{fontSize:20}} placeholder='Select Event' data={data} setSelected={setMySelectedList} boxStyles={{borderColor:"#9A2143"}} dropdownTextStyles={{color:"black", fontFamily:"DMSerifDisplay-Regular", fontSize:16}} />
              </View>
              <View style={{display:"flex", gap:height*0.023}}>
                  <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Guests</Text>
                  <TextInput
                style={styles.input}
                placeholder="Number of Guests"
                value={guests}
                onChangeText={setGuests}
              />
              </View>
              <View style={{display:"flex", gap:height*0.023}}>
                  <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Food</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{height:height*0.23,gap:height*0.001 , marginRight:width*0.05,borderRadius:width*0.05,width:width*0.4, borderWidth:1, borderColor:"#9A2143",backgroundColor:"white", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{}}>
                          <Image style= {{resizeMode:'cover'}}source={require('../images/biryani.png')}/>
                        </View>
                        <View ><Text style={{color:"black", fontSize:20,fontFamily:"DMSerifDisplay-Regular"}}>Biryani</Text></View>

                        <View>
                          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:width*0.15}}>
                            <Text style={{fontSize:18, fontStyle:'italic', color:"black", fontFamily:"DMSerifDisplay-Regular"}}>500 rs</Text>
                            <Image source={require("../images/Vector.png")}/>

                          </View>
                        </View>
                    </View>
                    <View style={{height:height*0.23,gap:height*0.001 ,marginRight:width*0.05, borderRadius:width*0.05,width:width*0.4, borderWidth:1, borderColor:"#9A2143",backgroundColor:"white", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{}}>
                          <Image style= {{resizeMode:'cover'}}source={require('../images/roast.png')}/>
                        </View>
                        <View ><Text style={{color:"black", fontSize:20,fontFamily:"DMSerifDisplay-Regular"}}>Chickent Roast</Text></View>

                        <View>
                          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:width*0.15}}>
                            <Text style={{fontSize:18, fontStyle:'italic', color:"black", fontFamily:"DMSerifDisplay-Regular"}}>600 rs</Text>
                            <Image source={require("../images/Vector.png")}/>

                          </View>
                        </View>
                    </View>
                    <View style={{height:height*0.23,gap:height*0.001 ,marginRight:width*0.05, borderRadius:width*0.05,width:width*0.4, borderWidth:1, borderColor:"#9A2143",backgroundColor:"white", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{}}>
                          <Image style= {{resizeMode:'cover',height:height*0.1,width:width*0.3}}source={require('../images/fish.png')}/>
                        </View>
                        <View ><Text style={{color:"black", fontSize:20,fontFamily:"DMSerifDisplay-Regular"}}>Fish</Text></View>

                        <View>
                          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:width*0.15}}>
                            <Text style={{fontSize:18, fontStyle:'italic', color:"black", fontFamily:"DMSerifDisplay-Regular"}}>1000 rs</Text>
                            <Image source={require("../images/Vector.png")}/>

                          </View>
                        </View>
                    </View>
                  </ScrollView>  
                  <View style={{display:"flex", marginTop:height*0.08, alignItems:"flex-end", marginBottom:height*0.08}}>
                      <Image source={require("../images/next.png")}/>   
                  </View>
              
              </View>
             
          </View>
      </View>
    </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
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
  but1:{
    backgroundColor:"#9A2143",
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    width:width*0.35,
    height:height*0.05,
    alignItems:"center",
    justifyContent:"center"

  },
  text5:{
    fontSize:16, color:"white",
    fontFamily:"DMSerifDisplay-Regular", textAlign:"center"
  },
  second:{

    width:"90%",
    justifyContent:"space-between",
    gap:height*0.05

    
  },
  s:{
    display:"flex",
    alignItems:"center"
  },
  input:{
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderColor:"#9A2143",
    width: "100%",
    fontFamily:"Montaga-Regular",
    fontSize:16,
    paddingLeft:width*0.05
  },
  
})

export default SettingsScreen