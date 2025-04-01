import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RootStackParamList from '../types/root_stack_param_list';
import {NavigationContainer} from '@react-navigation/native';
import userselection from '../screens/userselection';
import Login from '../screens/Login';
import {navigationRef} from '../services/navigation_services';
import signup from '../screens/signup';
import patientonbordingfirst from '../screens/patientonbordingfirst';
import patientonbordingsecond from '../screens/patientonbordingsecond';
import patientonbordingthird from '../screens/patientonbordingthird';
import doctoronbordingfirst from '../screens/doctoronbordingfirst';
import doctoronbordingsecond from '../screens/doctoronbordingsecond';
import doctoronbordingthird from '../screens/doctoronbordingthird';
import userdashboard from '../screens/userdashboard';
import patientbottomnavigation from './patientbottomnavigation';
import doctorbottomnavigation from './doctorbottomnavigation';
import doctordashboard from '../screens/doctordashboard';
import notification from '../screens/notification';
import otp from '../screens/otp';

const StackComponent = createStackNavigator<RootStackParamList>();
export default function () {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <StackComponent.Navigator
          initialRouteName={'Userselection'}
          screenOptions={{
            headerShown: false,
          }}>
          <StackComponent.Screen
            name={'Userselection'}
            component={userselection}
          />
          <StackComponent.Screen name={'Login'} component={Login} />
          <StackComponent.Screen name={'Signup'} component={signup} />
          <StackComponent.Screen
            name={'Patientonbordingfirst'}
            component={patientonbordingfirst}
          />
          <StackComponent.Screen
            name={'Patientonbordingsecond'}
            component={patientonbordingsecond}
          />
          <StackComponent.Screen
            name={'Patientonbordingthird'}
            component={patientonbordingthird}
          />
          <StackComponent.Screen
            name={'Doctoronbordingfirst'}
            component={doctoronbordingfirst}
          />
          <StackComponent.Screen
            name={'Doctoronbordingsecond'}
            component={doctoronbordingsecond}
          />
          <StackComponent.Screen
            name={'Doctoronbordingthird'}
            component={doctoronbordingthird}
          />
          <StackComponent.Screen
            name={'Userdashboard'}
            component={userdashboard}
          />
          <StackComponent.Screen
            name={'Patientbottomnavigation'}
            component={patientbottomnavigation}
          />
          <StackComponent.Screen
            name={'Doctorbottomnavigation'}
            component={doctorbottomnavigation}
          />
          <StackComponent.Screen
            name={'Doctordashboard'}
            component={doctordashboard}
          />
          <StackComponent.Screen
            name={'Notification'}
            component={notification}
          />
          <StackComponent.Screen name={'Otp'} component={otp} />
        </StackComponent.Navigator>
      </NavigationContainer>
    </>
  );
}
