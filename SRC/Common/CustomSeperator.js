import React from 'react';
import {View} from 'react-native';
const CustomSeperator = ({
  borderWidth = 0.5,
  borderColor = 'grey',
  style = {},
}) => {
  return (
    <View
      style={{
        borderBottomWidth: borderWidth,
        borderBottomColor: borderColor,
        marginVertical: 10,
        ...style,
      }}
    />
  );
};

export default CustomSeperator;
