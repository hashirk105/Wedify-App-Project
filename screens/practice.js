import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
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
  Dimensions,
  Pressable,
  Image,
  Alert,
  FlatList,
} from 'react-native';

// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");

export default function Viewemployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    const unsubscribe = firestore()
      .collection('employees')
      .onSnapshot(snapshot => {
        const userList = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          role: doc.data().role,
        }));
        setEmployees(userList);
      });

    return () => unsubscribe();
  }, []);

  const handleUpdateEmployee = employeeId => {
    navigation.navigate('updateemployees', { employeeId });
  };

  const renderUserItem = ({item}) => (
    <View>
      <ScrollView>
        <View style={styles.viewlist}>
          <View style={{height: 50}}>
            <Image
              style={{flex: 1, width: 50, marginLeft: 10, marginTop: 5}}
              source={require('../assets/profile.jpg')}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginLeft: 20,
              width: 150,
    
            }}>
            <Text style={styles.name}> {item.name}</Text>
            <Text style={styles.designation}>{item.role}</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 35, marginTop: 5}}>
            <Pressable
              style={{
                height: 40,
                width: 30,
                marginTop: 10,
                flexDirection: 'row',
              }}
              onPress={() => {
                Alert.alert('You clicked delete button!', 'You clicked it!');
              }}>
              <Image
                style={{flex: 1, width: 40, marginRight: 10}}
                source={require('../assets/delete.png')}
                resizeMode="cover"
              />
            </Pressable>
            <Pressable
              style={{
                height: 35,
                width: 30,
                marginTop: 13,
                flexDirection: 'row',
              }}
              onPress={() => {
                () => handleUpdateEmployee(item.id);
              }}>
              <Image
                style={{flex: 1, width: 50, marginLeft: 5}}
                source={require('../assets/update.png')}
                resizeMode="cover"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground
        style={{flex: 1, width: '100%', height: '100%'}}
        source={require('../assets/bg4.png')}>
        <View style={styles.container}>
        
          <Text style={styles.maintext}>View Employees</Text>

          <DropShadow style={styles.DropShadow}>
            <FlatList
              data={employees}
              renderItem={renderUserItem}
              keyExtractor={item => item.id}></FlatList>
          </DropShadow>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '80%',
    marginTop: '40%',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  maintext: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 41,
    fontFamily: 'DMSerifDisplay-Regular',
    color: '#9A2143',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 3,
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
  viewlist: {
    flexDirection: 'row',
    backgroundColor: '#FFF4EB',
    height: 60,
    width: 350,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 50,
  },
  name: {
    marginTop: 1,
    color: '#9A2143',
    fontFamily: 'Montaga-Regular',
    fontSize: 17,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
  },
  designation: {
    marginTop: 2,
    color: '#BFA054',
    fontFamily: 'Montaga-Regular',
    fontSize: 17,
    marginLeft: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
  },
});
