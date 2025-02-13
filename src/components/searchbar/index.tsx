import React from 'react';
import FlexBox from '../flexBox';
import Title from '../title';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
export default function () {
  return (
    <>
      <FlexBox style={styles.container} alignItems="center">
        <TextInput
          numberOfLines={1}
          placeholder="Search doctors , specialities...."
          placeholderTextColor={COLORS.NEUTRAL_400}
          style={styles.textinput}></TextInput>
        <FlexBox style={styles.button}>
          <TouchableOpacity>
            <EvilIcons name="search" size={22} color={COLORS.NEUTRAL_400} />
          </TouchableOpacity>
        </FlexBox>
      </FlexBox>
    </>
  );
}
const styles = StyleSheet.create({
  textinput: {
    width: '78%',
    height: 40,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: COLORS.NEUTRAL_100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: COLORS.NATURAL_WHITE,
    paddingLeft: 10,
  },
  container: {
    alignSelf: 'center',
  },
  button: {
    height: 37.9,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    backgroundColor: COLORS.NATURAL_WHITE,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: 2,
  },
});
