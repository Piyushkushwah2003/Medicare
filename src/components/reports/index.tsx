import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FlexBox from '../flexBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZE} from '../../config/constants';
import Title from '../title';
export default function () {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <FlexBox style={styles.cal}>
          <AntDesign name="filetext1" size={18} color={COLORS.SUCCESS_200} />
        </FlexBox>
        <Title text="View Reports" textStyle={styles.text} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cal: {
    backgroundColor: COLORS.SUCCESS_300,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    width: '48%',
    padding: 15,
    flexDirection: 'column',
    rowGap: 10,
  },
  text: {
    fontSize: SIZE.SMALL,
    fontWeight: '600',
    color: COLORS.NEUTRAL_800,
  },
});
