import {useState} from 'react';
import {
  Button,
  RadioButton,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import DropShadow from 'react-native-drop-shadow';
import firestore from '@react-native-firebase/firestore';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';

export default function Addvenue({navigation}) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [price, setPrice] = useState('');

  const handleAddVenue = () => {
    if (!name || !location || !guests || !price) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      console.log('Adding venue...');
      firestore()
        .collection('venue')
        .add({
          name,
          location,
          guests,
          price,
        })
        .then(() => {
          alert('Venue added successfully!');
          setName('');
          setLocation('');
          setGuests('');
          setPrice('');
          navigation.navigate('viewemployees');
        })
        .catch(error => {
          console.log('Error adding Venue:', error.message);
        });
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        style={{flex: 1, width: wp('100%'), height: hp('29%')}}
        source={require('../assets/bg3.png')}>
        <View style={styles.sectionContainer}>
          <Text style={styles.maintext}>Add Venue</Text>
        </View>
      </ImageBackground>

      <KeyboardAvoidingView behavior="padding">
        <View style={{alignSelf: 'center'}}>
          <DropShadow style={styles.DropShadow}>
            <TextInput
              style={styles.Input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.Input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              style={styles.Input}
              placeholder="Guests Capcity"
              value={guests}
              onChangeText={setGuests}
            />
            <TextInput
              style={styles.Input}
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
            />
          </DropShadow>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <DropShadow style={styles.DropShadow}>
              <View>
                <Pressable
                  style={styles.Uploadimage}
                  onPress={() => {
                    Alert.alert('You clicked it!', 'You clicked it!');
                  }}>
                  <Image
                    style={{flex: 1, width: 40, height: 40, marginLeft: 13}}
                    source={require('../assets/upload.png')}
                  />
                </Pressable>
              </View>
            </DropShadow>
          </View>

          <DropShadow style={styles.DropShadow}>
            <TouchableOpacity style={styles.addButton} onPress={handleAddVenue}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
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
    marginBottom: 80,
    fontSize: 45,
    color: '#9A2143',
    fontFamily: 'DMSerifDisplay-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 3, height: 4},
    textShadowRadius: 8,
  },

  Input: {
    borderWidth: 3,
    width: 330,
    height: 60,
    marginBottom: 30,
    alignSelf: 'center',
    marginRight: 0,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    borderColor: '#9A2143',
    fontFamily: 'Montaga-Regular',
    backgroundColor: '#FBF8F2',
  },
  Uploadimage: {
    borderWidth: 3,
    width: 100,
    height: 70,
    marginBottom: 30,
    marginRight: 230,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    borderColor: '#9A2143',
    fontFamily: 'Montaga-Regular',
    backgroundColor: '#FBF8F2',
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
  addButton: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 0,
    width: 120,
    height: 60,
    marginBottom: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A2143',
  },
  buttonText: {
    fontSize: 21,
    fontFamily: 'DMSerifDisplay-Regular',
    color: 'white',
    textAlign: 'center',
  },
});
