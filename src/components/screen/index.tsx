import React from 'react';
import {COLORS} from '../../config/constants';
import FlexBox from '../flexBox';

export default function ({
  children,
  color = COLORS.NATURAL_WHITE,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <FlexBox flexDirection="column" style={{backgroundColor: color, flex: 1}}>
      {children}
    </FlexBox>
  );
}
