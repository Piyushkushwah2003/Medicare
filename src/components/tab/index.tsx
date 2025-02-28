import React, {useState} from 'react';
import FlexBox from '../flexBox';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../title';
import {COLORS, SIZE} from '../../config/constants';
import {TabItems} from '../../types/helpertype';
export default function ({
  // handleTab,
  tabData,
}: {
  // handleTab: () => void;
  tabData: TabItems[];
}) {
  const [selected, setSelected] = useState<number>(0);
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlexBox
          alignItems="center"
          style={{marginTop: 5, marginBottom: 10}}
          columngap={5}>
          {tabData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                selected == index ? styles.selectedbutton : styles.button,
              ]}
              onPress={() => setSelected(index)}>
              <Title
                key={index}
                text={item.title}
                textStyle={[
                  selected == index ? styles.selectedText : styles.buttontext,
                ]}
              />
            </TouchableOpacity>
          ))}
        </FlexBox>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: COLORS.NATURAL_WHITE,
    borderWidth: 1,
    borderColor: COLORS.NEUTRAL_100,
  },
  buttontext: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '400',
    color: COLORS.NEUTRAL_800,
  },
  selectedbutton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#3b82f6',
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  selectedText: {
    fontSize: SIZE.EXTRASMALL,
    fontWeight: '400',
    color: COLORS.NATURAL_WHITE,
  },
});
