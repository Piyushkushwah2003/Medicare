import React from 'react';
import Screenheader from '../../components/screenheader';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../../components/title';
import {COLORS, SIZE} from '../../config/constants';
import Box from '../../components/box';
export default function () {
  return (
    <>
      <ScrollView>
        <Screenheader
          headerText="Notifications"
          headerContainerStyle={styles.header}
          children={
            <TouchableOpacity style={{alignSelf: 'flex-end'}}>
              <Title text="Mark all as read" textStyle={styles.textstyle} />
            </TouchableOpacity>
          }
        />
      </ScrollView>
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
});
