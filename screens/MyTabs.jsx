import React from 'react';
// import Home from '../screens/Home/Home.screen'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconm from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import {Screen_} from './constants/constants';
import Weather_Report from './dailyweatherReport/WeatherReport.jsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Screen_.main_color,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home_1"
        component={Home}
        options={{
          title: 'Home',
          headerTintColor: 'black',
          tabBarStyle: {
            height: Screen_.height / 14.3,
            backgroundColor: 'white',
          },
          tabBarItemStyle: {
            height: Screen_.width / 7,
            backgroundColor: Screen_.main_color,
          },

          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name={
                  color == Screen_.main_color ? 'home-circle-outline' : 'home'
                }
                size={Screen_.width / 8}
                color={'white'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home_2"
        component={Weather_Report}
        options={{
          tabBarHideOnKeyboard: true,
          title: 'Home',

          headerTintColor: 'black',
          tabBarStyle: {
            height: Screen_.height / 14.3,
            backgroundColor: 'white',
          },
          tabBarItemStyle: {
            height: Screen_.width / 7,
            backgroundColor: Screen_.main_color,
          },

          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icon
                name={
                  color == Screen_.main_color
                    ? 'content-save-outline'
                    : 'content-save-settings'
                }
                size={Screen_.width / 8}
                color={'white'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home_3"
        component={Home}
        options={{
          tabBarHideOnKeyboard: true,
          title: 'Home',

          headerTintColor: 'black',
          tabBarStyle: {
            height: Screen_.height / 14.3,
            backgroundColor: 'white',
          },
          tabBarItemStyle: {
            height: Screen_.width / 7,
            backgroundColor: Screen_.main_color,
          },

          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Iconm
                name={
                  color == Screen_.main_color
                    ? 'md-settings-outline'
                    : 'md-settings'
                }
                size={Screen_.width / 8}
                color={'white'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Home_Stack_navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const Login_Stack_navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="About" component={Home} />
    </Stack.Navigator>
  );
};
export default MyTabs;
