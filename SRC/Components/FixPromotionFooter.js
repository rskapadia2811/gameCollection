import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hp, wp} from '../Helpers/screenHelper';
const FixPromotionFooter = () => {
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        bottom: 0,
        alignSelf: 'flex-end',
        padding: 0,
        margin: 0,
      }}>
      <FastImage
        source={require('../Assets/Images/CompanyLogo/companylogo.jpeg')}
        style={{
          borderTopLeftRadius: 15,
          width: wp(25),
          height: wp(8),
        }}
        resizeMode={'stretch'}
      />
    </View>
  );
};

export default FixPromotionFooter;
