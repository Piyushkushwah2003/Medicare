import React from 'react';
import Screenheader from '../../components/screenheader';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../../components/title';
import {COLORS, SIZE} from '../../config/constants';
import FlexBox from '../flexBox';
import Feather from 'react-native-vector-icons/Feather';
export default function () {
  return (
    <>
      <FlexBox>
        <FlexBox style={styles.iconContainer}>
          <Feather name="calendar" size={18} color={COLORS.PRIMARY_900} />
        </FlexBox>
      </FlexBox>
    </>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    fontSize: SIZE.EXTRASMALL,
    color: COLORS.PRIMARY_600,
    fontWeight: '400',
  },
  header: {
    backgroundColor: COLORS.NATURAL_WHITE,
    padding: 15,
  },
  iconContainer: {
    backgroundColor: '#dbeafe',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
