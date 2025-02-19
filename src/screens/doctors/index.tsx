import React, {useState} from 'react';
import Title from '../../components/title';
import Screenheader from '../../components/screenheader';
import FlexBox from '../../components/flexBox';
import Searchbar from '../../components/searchbar';
import Box from '../../components/box';
import Tab from '../../components/tab';
import Doctor from '../../components/doctor';
import {IMAGES} from '../../config/constants';
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
  return (
    <>
      <Box>
        <Screenheader headerText="Our Doctors" />
        <FlexBox flexDirection="column" rowgap={10}>
          <Searchbar placeholderText="Search doctors by name or speciality... " />
          <Tab tabData={Tabdata} />
          <FlexBox flexDirection="column" rowgap={10}>
            {doctors.map((item, index) => (
              <Doctor
                key={index}
                name={item.name}
                profilePhoto={IMAGES.doctor}
                experience={item.exp}
                rating={item.rating}
                speciality={item.speciality}
              />
            ))}
          </FlexBox>
        </FlexBox>
      </Box>
    </>
  );
}
