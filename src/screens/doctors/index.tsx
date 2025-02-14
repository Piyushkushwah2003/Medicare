import React from 'react';
import Title from '../../components/title';
import Screenheader from '../../components/screenheader';
import FlexBox from '../../components/flexBox';
import Searchbar from '../../components/searchbar';
import Box from '../../components/box';
export default function () {
  return (
    <>
     <Box>
     <Screenheader headerText="Our Doctors" />
      <FlexBox flexDirection='column'>
        <Searchbar placeholderText="Search doctors by name or speciality... " />
        
      </FlexBox>
     </Box>
    </>
  );
}
