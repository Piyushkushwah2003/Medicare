import React from 'react';
import FlexBox from '../flexBox';
import {TouchableOpacity} from 'react-native';
import Title from '../title';
export default function () {
  return (
    <>
      <FlexBox>
        <TouchableOpacity>
          <Title text="All Departments" />
        </TouchableOpacity>
      </FlexBox>
    </>
  );
}
