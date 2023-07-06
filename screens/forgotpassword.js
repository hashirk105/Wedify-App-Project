//
import React, {useState} from 'react';
import {Button, Provider as PaperProvider} from 'react-native-paper';
import DropShadow from 'react-native-drop-shadow';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Forgotpassword({navigation}) {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');
  const [SecureEntry, setSecureEntry] = useState(true);
  const [IsSecureEntry, setIsSecureEntry] = useState(true);

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  const handleValidation = () => {
    if (Password === '') {
      setErrorMessage('Please enter a password');
    } else if (ConfirmPassword === '') {
      setErrorMessage('Please confirm your password');
    } else if (Password !== ConfirmPassword) {
      setErrorMessage('Passwords do not match');
    } else if (Password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
    } else if (!/\d/.test(Password)) {
      setErrorMessage('Password must contain at least one digit');
    } else if (!/[A-Z]/.test(Password)) {
      setErrorMessage('Password must contain at least one uppercase letter');
    } else if (!/[a-z]/.test(Password)) {
      setErrorMessage('Password must contain at least one lowercase letter');
    } else {
      setErrorMessage('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, width: wp('100%')}}
        source={require('../assets/bg1.png')}>
        <View style={styles.sectionContainer}>
          <Text style={styles.Logintext}>Create new password</Text>

          <View style={{alignSelf:'center'}}> 
          <View style={styles.wrapPassword}>
            <View style={{}}>
              <TextInput
                style={styles.InputEmail}
                placeholder="Password"
                value={Password}
                onChangeText={handlePasswordChange}
                secureTextEntry={IsSecureEntry}
              />

              <View style={{alignSelf: 'flex-end', marginRight: wp('4%')}}>
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'DMSerifDisplay-Regular',
                      fontSize: 15,
                      color: '#9A2143',
                    }}>
                    {IsSecureEntry ? 'Show' : 'Hide'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.wrapConfirmPassword}>
            <View>
              <TextInput
                style={styles.InputPassword}
                placeholder="Confirm Password"
                value={ConfirmPassword}
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry={SecureEntry}
              />

              <View style={{alignSelf: 'flex-end', marginRight: wp('4%')}}>
                <TouchableOpacity
                  onPress={() => {
                    setSecureEntry(prev => !prev);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'DMSerifDisplay-Regular',
                      fontSize: 15,
                      color: '#9A2143',
                    }}>
                    {SecureEntry ? 'Show' : 'Hide'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </View>
          <View style={{width: 280, height: hp('7%'), marginBottom: 0, }}>
            {ErrorMessage !== '' && (
              <Text style={styles.matchtext}>{ErrorMessage}</Text>
            )}
          </View>
          <DropShadow style={styles.DropShadow}>
            <Button
              style={styles.loginButton}
              buttonColor="#9A2143"
              textColor="white"
              onPress={handleValidation}>
              <Text style={{fontSize: 18, fontFamily: 'Montaga-Regular'}}>
                Reset Password
              </Text>
            </Button>
          </DropShadow>
        </View>
      </ImageBackground>
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
  Logintext: {
    fontSize: 28,
    color: '#9A2143',
    fontFamily: 'DMSerifDisplay-Regular',
    alignSelf: 'center',
    marginBottom: hp('7%'),
    marginRight: wp('3%'),
  },
  InputEmail: {
    flexDirection: 'row',
    borderWidth: 2,
    width: wp('60%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginBottom: hp('-4.3%'),
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 17,
    fontFamily: 'Montaga-Regular',
    borderColor: '#9A2143',
  },
  InputPassword: {
    flexDirection: 'row',
    borderWidth: 2,
    width: wp('60%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginBottom: hp('-4.3%'),
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 17,
    fontFamily: 'Montaga-Regular',
    borderColor: '#9A2143',
  },
  matchtext: {
    marginLeft: wp('2%'),
    marginBottom: hp('1%'),
    color: 'red',
    fontFamily: 'Montaga-Regular',
    fontSize: 16,
    numberoflines:2,
  },
  loginButton: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 0,
    width: wp('38'),
    height: hp("6%"),
    marginBottom: hp("10%"),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  wrapPassword: {
    flexDirection: 'row',
    marginBottom: hp('8%'),
    
  },
  wrapConfirmPassword: {
    flexDirection: 'row',
    marginBottom: 35,
    
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
