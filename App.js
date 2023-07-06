
import LandingPage from './screens/LandingPage';
import Adminlogin from './screens/adminlogin';
import UserLogin from './screens/userlogin';
import Forgotpassword from './screens/forgotpassword';
import Addemployees from './screens/addemployees';
import Updateemployees from './screens/updateemployees';
import Viewemployees from './screens/viewemployees';
import Adminmenu from './screens/adminmenu';
import Addvenue from './screens/addvenue';
import Updatevenue from './screens/updatevenue';
import Practice from './screens/practice';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpUser from './screens/SignUpUser';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          {/* <Stack.Screen name="landingpage" component={LandingPage} />  
        <Stack.Screen name="adminlogin" component={Adminlogin} /> */}
        <Stack.Screen name="userlogin" component={UserLogin} />  
         <Stack.Screen name="Sign Up" component={SignUpUser} />   
        <Stack.Screen name="Home Screen" component={HomeScreen} />  
        {/* <Stack.Screen name="adminmenu" component={Adminmenu} /> */}
        {/* <Stack.Screen name="forgotpassword" component={Forgotpassword} />   */}
        {/* <Stack.Screen name="addemployees" component={Addemployees} />
        <Stack.Screen name="viewemployees" component={Viewemployees} />
        <Stack.Screen name="updateemployees" component={Updateemployees} />
        <Stack.Screen name="addvenue" component={Addvenue} />
        <Stack.Screen name="Updatevenue" component={Updatevenue} /> */}
        {/* <Stack.Screen name="practice" component={Practice} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
