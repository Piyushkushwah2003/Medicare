import React, {useState} from 'react';
import Title from '../../components/title';
import Screenheader from '../../components/screenheader';
import FlexBox from '../../components/flexBox';
import Searchbar from '../../components/searchbar';
import Box from '../../components/box';
import Tab from '../../components/tab';
export default function () {
  const Tabdata = [
    {id: 1, title: 'All Departments'},
    {id: 2, title: 'Cardiology'},
    {id: 3, title: 'Neurology'},
    {id: 4, title: 'Orthopedics'},
    {id: 5, title: 'Pediatrics'},
  ];
  return (
    <>
      <Box>
        <Screenheader headerText="Our Doctors" />
        <FlexBox flexDirection="column" rowgap={10}>
          <Searchbar placeholderText="Search doctors by name or speciality... " />
          <Tab tabData={Tabdata} />
        </FlexBox>
      </Box>
    </>
  );
}
