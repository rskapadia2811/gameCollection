import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import GLOBAL from '../../GLOBAL';
import FastImage from 'react-native-fast-image';
import {hp, wp} from '../Helpers/screenHelper';
class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.heartPhotoSlideUp = new Animated.Value(0);
  }
  componentDidMount(): void {
    this.heartPhotoSlideUpAnimation();
  }
  heartPhotoSlideUpAnimation = () => {
    Animated.timing(this.heartPhotoSlideUp, {
      toValue: 1,
      duration: 3000,
      easing: Easing.bounce,
    }).start();
  };
  checkNewData = (nextPropsValue, state) => {
    if (nextPropsValue !== this.state[state]) {
      this.setState({
        [state]: nextPropsValue,
      });
    }
  };
  goToHome2Component = () => {
    this.props.navigation.navigate('Home2Component');
  };
  render() {
    return (
      <GLOBAL>
        <View style={Styles.mainContainer}>
          <Animated.View
            style={{
              alignItems: 'center',
              top: this.heartPhotoSlideUp.interpolate({
                inputRange: [0, 1],
                outputRange: [-hp(50), 0],
              }),
            }}>
            <View style={{...Styles.happyBirthdayBorder}} />
            <FastImage
              source={require('../Assets/Images/HB-Bhakti.png')}
              style={{...Styles.happyBirthdayImage}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
          <TouchableOpacity
            style={Styles.startYourGameButton}
            onPress={() => this.goToHome2Component()}>
            <Text style={Styles.startYourGameText}>
              A small gift for the love of my life
            </Text>
          </TouchableOpacity>
          <Animated.View
            style={{
              ...Styles.heartImageContainer,
              justifyContent: 'flex-end',
              bottom: this.heartPhotoSlideUp.interpolate({
                inputRange: [0, 1],
                outputRange: [-hp(50), 0],
              }),
            }}>
            <FastImage
              source={require('../Assets/Images/mainBackground.jpg')}
              style={{
                width: hp(30),
                height: hp(30),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
        </View>
      </GLOBAL>
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    flex: 1,
  },
  mainTitleText: {
    textAlign: 'center',
    fontSize: 25,
  },
  singleRecordContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  happyBirthdayBorder: {
    position: 'absolute',
    top: hp(-16),
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'rgb(221,87,146)',
    height: hp(30),
    width: wp(50),
  },
  happyBirthdayImage: {
    width: hp(40),
    height: hp(40),
    transform: [
      {
        rotateZ: 25,
      },
    ],
  },
  heartImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
  },
  startYourGameButton: {
    backgroundColor: 'pink',
    padding: wp(3),
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  startYourGameText: {
    textAlign: 'center',
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'rgb(221,87,146)',
  },
});

export default HomeComponent;
