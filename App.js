import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/SignUp';
//  import Index from './screens/Index';
 import Home from './screens/Home';
//  import UnitsPicker from './components/UnitsPick'
import Settings from './screens/Settings';
import Privacy from './screens/Privacy';



const Stack = createStackNavigator();


const App = () => {
  return (
    
    // <View><Text>App</Text></View>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Privacy" component={Privacy} />

       <Stack.Screen name="Signup" component={Signup} />
       
      {/* <Stack.Screen name="UnitsPicker" component={UnitsPicker} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}



      </Stack.Navigator>
     </NavigationContainer>

  );
};
export default App

