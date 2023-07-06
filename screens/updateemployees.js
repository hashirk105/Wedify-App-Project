import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Button,
  RadioButton,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import DropShadow from 'react-native-drop-shadow';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9A2143',
  },
};

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
  Alert
  
} from 'react-native';

export default function Updateemployees({navigation}) {

  const [gender, setGender] = useState('male');

  const handleGenderChange = value => {
    setGender(value);
  };
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        style={{flex: 1, width: wp('100%'), height: hp('29%')}}
        source={require('../assets/bg3.png')}>
        <View style={styles.sectionContainer}>
          <Text style={styles.maintext}>Update Employees</Text>
        </View>
      </ImageBackground>

      <KeyboardAvoidingView behavior="padding">
        <View style={{alignSelf: 'center'}}>
          <DropShadow style={styles.DropShadow}>
            <TextInput
              style={styles.Input}
              placeholder="Name"
              autoCapitalize = "sentences"
            />

            <TextInput
              style={styles.Input}
              placeholder="Age"            
              keyboardType="numeric"
            />
            <TextInput
              style={styles.Input}
              placeholder="Contact"            
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.Input}
              placeholder="Role"
              
            />
          </DropShadow>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <DropShadow style={styles.DropShadow}>
              <Text style={styles.Inputgender}>Gender</Text>
            </DropShadow>

            <RadioButton.Group
              onValueChange={handleGenderChange}
              value={gender}>
              <PaperProvider theme={theme}>
                <View style={{flexDirection: 'row', marginRight: 2}}>
                  <View
                    style={{
                      marginRight: 40,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RadioButton value="male" />
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#9A2143',
                        fontFamily: 'Montaga-Regular',
                      }}>
                      Male
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton value="female" />
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#9A2143',
                        fontFamily: 'Montaga-Regular',
                      }}>
                      Female
                    </Text>
                  </View>
                </View>
              </PaperProvider>
            </RadioButton.Group>
          </View>

          <DropShadow style={styles.DropShadow}>
            <Button
              style={styles.loginButton}
              buttonColor="#9A2143"
              textColor="white"
              >
              <Text
                style={{fontSize: 22, fontFamily: 'DMSerifDisplay-Regular'}}>
                Update
              </Text>
            </Button>
          </DropShadow>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  maintext: {
    marginBottom: 110,
    fontSize: 40,
    color: '#9A2143',
    fontFamily: 'DMSerifDisplay-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: {width: 3, height: 4},
    textShadowRadius: 8,
    lineHeight:50
  },

  Input: {
    borderWidth: 3,
    width: 330,
    height: 60,
    marginBottom: 30,
    alignSelf: 'center',
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    borderColor: '#9A2143',
    fontFamily: 'Montaga-Regular',
    backgroundColor: '#FBF8F2',
  },
  Inputgender: {
    borderWidth: 3,
    width: 100,
    height: 60,
    marginBottom: 30,
    alignSelf: 'center',
    marginRight: 16,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    borderColor: '#9A2143',
    fontFamily: 'Montaga-Regular',
    backgroundColor: '#FBF8F2',
  },

  loginButton: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 0,
    width: 120,
    height: 60,
    marginBottom: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  DropShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.27,
    elevation: 5,
  },
});
