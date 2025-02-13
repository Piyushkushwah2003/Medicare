import React from 'react';
import FlexBox from '../flexBox';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../title';
import {COLORS, SIZE} from '../../config/constants';
import Feather from 'react-native-vector-icons/Feather';
export default function ({
  checkupType,
  name,
  time,
}: {
  checkupType: string;
  name: string;
  time: string;
}) {
  return (
    <>
      <FlexBox style={styles.container}>
        <FlexBox flexDirection="column" rowgap={2}>
          <Title text={checkupType} textStyle={styles.nametext} />
          <Title text={name} textStyle={styles.specialitytext} />
          <Title text={time} textStyle={styles.specialitytext} />
        </FlexBox>
        <TouchableOpacity style={styles.download}>
          <Feather name="download" color={COLORS.PRIMARY_900} size={24} />
        </TouchableOpacity>
      </FlexBox>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nametext: {
    fontSize: SIZE.SMALL,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  specialitytext: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '400',
    color: COLORS.NEUTRAL_400,
  },
  download: {
    marginRight: 20,
  },
});
