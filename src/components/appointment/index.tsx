import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FlexBox from '../flexBox';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, SIZE} from '../../config/constants';
import Title from '../title';
export default function () {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <FlexBox style={styles.cal}>
          <Feather name="calendar" size={18} color={COLORS.PRIMARY_900} />
        </FlexBox>
        <Title text="Book Appointment" textStyle={styles.text} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cal: {
    backgroundColor: '#dbeafe',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    padding: 15,
    width: '48%',
    flexDirection: 'column',
    rowGap: 10,
  },
  text: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NEUTRAL_800,
  },
});
