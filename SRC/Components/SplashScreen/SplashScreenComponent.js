import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';
import {wp} from '../../Helpers/screenHelper';

class SplashScreenComponent extends Component {
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('HomeComponent');
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
        <FastImage
          style={{
            height: wp(100),
            width: wp(100),
          }}
          ressizeMode={'contain'}
          source={require('../../Assets/Images/CompanyLogo/orginallogo.jpeg')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: wp(5),
            letterSpacing: 5,
          }}>
          www.egiftwala.in{'\n'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: wp(5),
          }}>
          +91 820 066 1530
        </Text>
      </View>
    );
  }
}
export default SplashScreenComponent;
