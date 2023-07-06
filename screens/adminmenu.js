import {
  Button,
  RadioButton,
  Provider as PaperProvider,
  DefaultTheme,
  Card,
} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DropShadow from 'react-native-drop-shadow';
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#9A2143',
//   },
// };

import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  Alert,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';

export default function Adminmenu({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        style={{flex: 1, width: wp('100%'), height: hp('30%')}}
        source={require('../assets/bg3.png')}>
        <Text style={styles.maintext}>MENU</Text>
      </ImageBackground>

      <View style={styles.cardView}>
        <DropShadow style={styles.DropShadow}>
          <Pressable onPress={() => navigation.navigate('addemployees')}>
            <Card style={styles.card}>
              <Card.Cover
                source={require('../assets/add.png')}
                style={{
                  width: '55%',
                  height: '50%',
                  alignSelf: 'center',
                  marginTop: 20,
                  backgroundColor: 'white',
                }}
              />
              <Card.Title
                titleStyle={{
                  fontSize: 20,
                  fontFamily: 'DMSerifDisplay-Regular',
                  textAlign: 'center',
                  color: '#9A2143',
                }}
                title="Add Employees"
                titleNumberOfLines={2}
                style={{marginTop: 5}}
              />
            </Card>
          </Pressable>
        </DropShadow>

        <DropShadow style={styles.DropShadow}>
          <Pressable onPress={() => navigation.navigate('viewemployees')}>
            <Card style={styles.card}>
              <Card.Cover
                source={require('../assets/view.png')}
                style={{
                  width: '47%',
                  height: '50%',
                  alignSelf: 'center',
                  marginTop: 10,
                  backgroundColor: 'white',
                }}
              />
              <Card.Title
                titleStyle={{
                  fontSize: 20,
                  fontFamily: 'DMSerifDisplay-Regular',
                  textAlign: 'center',
                  color: '#9A2143',
                }}
                title="View Employees"
                titleNumberOfLines={2}
                style={{marginTop:15}}
              />
            </Card>
          </Pressable>
        </DropShadow>

        <DropShadow style={styles.DropShadow}>
          <Pressable onPress={() => navigation.navigate('addvenue')}>
            <Card style={styles.card}>
              <Card.Cover
                source={require('../assets/add2.png')}
                style={{
                  width: '60%',
                  height: '53%',
                  alignSelf: 'center',
                  marginTop: 15,
                  backgroundColor: 'white',
                }}
              />
              <Card.Title
                titleStyle={{
                  fontSize: 20,
                  fontFamily: 'DMSerifDisplay-Regular',
                  textAlign: 'center',
                  color: '#9A2143',
                  lineHeight: 20,
                }}
                title=" Add Venues"
                titleNumberOfLines={2}
                style={{marginTop: 10}}
              />
            </Card>
          </Pressable>
        </DropShadow>

        <DropShadow style={styles.DropShadow}>
          <Pressable onPress={() => navigation.navigate('viewvenue')}>
            <Card style={styles.card}>
              <Card.Cover
                source={require('../assets/venue.png')}
                style={{
                  width: '50%',
                  height: '48%',
                  alignSelf: 'center',
                  marginTop:12,
                  backgroundColor: 'white',
                }}
              />
              <Card.Title
                titleStyle={{
                  fontSize: 20,
                  fontFamily: 'DMSerifDisplay-Regular',
                  textAlign: 'center',
                  color: '#9A2143',
                }}
                title="View Venues"
                titleNumberOfLines={2}
                style={{marginTop: 20}}
              />
            </Card>
          </Pressable>
        </DropShadow>
      </View>
      <DropShadow style={styles.DropShadow}>
      <Button
        mode="container"
        buttonColor="#9A2143"
        textColor="white"
        labelStyle={{fontFamily: 'DMSerifDisplay-Regular', fontSize: 18}}
        onPress = {() => navigation.replace("adminlogin")}
        style={{
          width: 130,
          alignSelf: 'center',
          marginBottom: 80,
          height: 50,
          justifyContent: 'center', 
          alignItems: 'center',
          borderTopLeftRadius:14,
          borderBottomRightRadius:14,
          borderRadius:0
        }}>
        LOG OUT
      </Button>
      </DropShadow>
    </View>
  );
}
const styles = StyleSheet.create({
  maintext: {
    marginTop: 55,
    textAlign: 'center',
    fontSize: 70,
    color: '#BFA054',
    fontFamily: 'DMSerifDisplay-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 1, height: 4},
    textShadowRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 10,
  },
  cardView: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginBottom: hp('15%'),
    alignSelf: 'center',
    width: wp('95%'),

  },
  card: {
    backgroundColor: 'white',
    height: hp('20%'),
    width: wp('35%'),
    marginBottom: 50,
    borderRadius: 33,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  DropShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.27,
    elevation: 5,
  },
});
