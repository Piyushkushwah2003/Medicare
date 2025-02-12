import React from 'react';
import FlexBox from '../flexBox';
import Title from '../title';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
export default function () {
  return (
    <>
      <FlexBox
        alignItems="center"
        justifyContent="between"
        style={styles.container}>
        <Title text="Medicare" textStyle={styles.text} />
        <FlexBox alignItems="center" columngap={25}>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={26}
              color={COLORS.BLACK}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IMAGES.profile} style={styles.image} />
          </TouchableOpacity>
        </FlexBox>
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
    backgroundColor:COLORS.NATURAL_WHITE,
  },
});
