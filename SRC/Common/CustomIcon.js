import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomIcon = ({
  name = 'eye',
  IconType = AntDesign,
  color = 'black',
  size = 40,
  style = null,
}) => {
  IconType.loadFont();
  return <IconType color={color} size={size} name={name} style={style} />;
};

export default CustomIcon;
