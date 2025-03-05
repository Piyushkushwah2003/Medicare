import React from 'react';
import FlexBox from '../flexBox';
import Title from '../title';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {navigate} from '../../services/navigation_services';
export default function () {
  return (
    <>
      <FlexBox
        alignItems="center"
        justifyContent="between"
        style={styles.container}>
        <TouchableOpacity style={styles.profile}>
          <Image source={IMAGES.profile} style={styles.image} />
          <FlexBox flexDirection="column" rowgap={4}>
            <Title text="Welcome" textStyle={styles.welcome} />
            <Title text="Test User" textStyle={styles.name} />
          </FlexBox>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.notification}
          onPress={() => navigate('Notification')}>
          <Ionicons
            name="notifications-outline"
            size={26}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
      </FlexBox>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: SIZE.MEDIUM,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.NEUTRAL_100,
    backgroundColor: COLORS.NATURAL_WHITE,
  },
  name: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '500',
    color: COLORS.NEUTRAL_800,
  },
  profile: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  welcome: {
    fontSize: SIZE.SMALLTEXT,
    color: COLORS.PRIMARY_400,
  },
  notification: {
    padding: 10,
    backgroundColor: COLORS.PRIMARY_100,
    borderRadius: 50,
  },
});
