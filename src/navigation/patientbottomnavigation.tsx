import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS, SIZE} from '../config/constants';
import {UserBottomNavigationType} from '../types/helpertype';
import userdashboard from '../screens/userdashboard';
import profile from '../screens/profile';
import FlexBox from '../components/flexBox';
import doctors from '../screens/doctors';
import appointments from '../screens/appointments';
import React from 'react';
const Tab = createBottomTabNavigator();

export default function () {
  const routes: UserBottomNavigationType[] = [
    {
      name: 'Home',
      icon: <SimpleLineIcons name="home" size={26} color="black" />,
      iconfill: (
        <SimpleLineIcons name="home" size={26} color={COLORS.PRIMARY_900} />
      ),
    },
    {
      name: 'Doctors',
      icon: <FontAwesome6 name="user-doctor" size={26} color="black" />,
      iconfill: (
        <FontAwesome6 name="user-doctor" size={26} color={COLORS.PRIMARY_900} />
      ),
    },
    {
      name: 'Appointments',
      icon: <Feather name="calendar" size={26} color="black" />,
      iconfill: (
        <Feather name="calendar" size={26} color={COLORS.PRIMARY_900} />
      ),
    },
    {
      name: 'Profile',
      icon: <Ionicons name="person" size={26} color="black" />,
      iconfill: <Ionicons name="person" size={26} color={COLORS.PRIMARY_900} />,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const currentRoute = routes.find(item => item.name === route.name);
          if (currentRoute !== undefined) {
            return (
              <FlexBox>
                {focused ? currentRoute.iconfill : currentRoute.icon}
              </FlexBox>
            );
          }
        },
        tabBarLabel: ({focused}) => {
          return (
            <View style={{width: '100%'}}>
              <View style={styles.labelContainer}>
                <Text
                  style={[styles.labelText, focused && styles.focusedenable]}>
                  {route.name}
                </Text>
              </View>
              {focused ? (
                <View style={styles.bottomBorder} />
              ) : (
                <View style={styles.disablebottomBorder} />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {paddingBottom: 0, height: 60},
      })}>
      <Tab.Screen name="Home" component={userdashboard} />
      <Tab.Screen name="Doctors" component={doctors} />
      <Tab.Screen name="Appointments" component={appointments} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  focusedIconContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingBottom: 5,
    backgroundColor: COLORS.NEUTRAL_400,
  },
  labelContainer: {
    alignItems: 'center',
  },
  labelText: {
    color: COLORS.NEUTRAL_700,
    fontSize: SIZE.SMALLTEXT,
  },
  focusedenable: {
    fontSize: SIZE.SMALLTEXT,
    color: COLORS.PRIMARY_900,
  },
  bottomBorder: {
    width: '100%',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: COLORS.PRIMARY_900,
  },
  disablebottomBorder: {
    width: '100%',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: COLORS.NATURAL_WHITE,
  },
});
