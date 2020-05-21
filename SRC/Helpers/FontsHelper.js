import React from 'react';
import {Platform} from 'react-native';
// Fonts Properties
export const fonts = {
  latoBlackItalic: 'Lato-BlackItalic',
  latoBlack: 'Lato-Black',
  latoBold: 'Lato-Bold',
  latoBoldItalic: 'Lato-BoldItalic',
  latoItalic: 'Lato-Italic',
  latoLight: 'Lato-Light',
  latoLightItalic: 'Lato-LightItalic',
  latoRegular: 'Lato-Regular',
  latoThin: Platform.OS === 'android' ? 'Lato-Thin' : 'Lato-Hairline',
  latoThinItalic:
    Platform.os === 'Android' ? 'Lato-ThinItalic' : 'Lato-HairlineItalic',
};
