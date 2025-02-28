import React, {useState} from 'react';
import Title from '../../components/title';
import Screenheader from '../../components/screenheader';
import FlexBox from '../../components/flexBox';
import Searchbar from '../../components/searchbar';
import Box from '../../components/box';
import Tab from '../../components/tab';
import Doctor from '../../components/doctor';
import {COLORS, IMAGES, SIZE} from '../../config/constants';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function () {
  const Tabdata = [
    {id: 1, title: 'All Departments'},
    {id: 2, title: 'Cardiology'},
    {id: 3, title: 'Neurology'},
    {id: 4, title: 'Orthopedics'},
    {id: 5, title: 'Pediatrics'},
  ];
  const doctors = [
    {
      name: 'Michael Brown',
      speciality: 'Neurologist',
      rating: '4.7',
      exp: '12',
    },
    {name: 'John', speciality: 'Cardiologist', rating: '4.5', exp: '4'},
    {name: 'Smith', speciality: 'Pediatrics', rating: '3.7', exp: '3'},
    {name: 'Anderson', speciality: 'Orthopedics', rating: '3.4', exp: '7'},
  ];
  const timeslots = ['09:30 AM', '10:30 AM', '02:00 PM'];
  const filterdata = [
    {iconname: 'calendar', title: 'Date'},
    {iconname: 'clock', title: 'Time'},
    {iconname: 'users', title: 'Gender'},
  ];
  return (
    <>
      <Box>
        <Screenheader headerText="Book Appointment" />
        <FlexBox flexDirection="column" rowgap={10}>
          <Tab tabData={Tabdata} />
          <FlexBox alignItems="center" columngap={10}>
            {filterdata.map((item, index) => (
              <TouchableOpacity style={styles.button} key={index}>
                <Feather name={item.iconname} size={16} color="#1f2937" />
                <Title text={item.title} textStyle={styles.text} />
              </TouchableOpacity>
            ))}
          </FlexBox>
          <FlexBox flexDirection="column" rowgap={10}>
            {doctors.map((item, index) => (
              <Doctor
                key={index}
                name={item.name}
                profilePhoto={IMAGES.doctor}
                experience={item.exp}
                rating={item.rating}
                speciality={item.speciality}
                timeVisible={true}
                time={timeslots}
              />
            ))}
          </FlexBox>
        </FlexBox>
      </Box>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.EXTRASMALL,
    color: '#1f2937',
    fontWeight: '400',
  },
  button: {
    padding: 8,
    flexDirection: 'row',
    columnGap: 7,
    backgroundColor: COLORS.NATURAL_WHITE,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.NEUTRAL_100,
  },
});
