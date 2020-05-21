import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  Animated,
  PanResponder,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import {hp, wp} from '../../../Helpers/screenHelper';
const Users = [
  {id: 1, message: 'Hi Bhakti'},
  {id: 2, message: 'This is Awkward but bear with me'},
  {id: 3, message: 'I have been thinking about us \n\n I know you always said'},
  {id: 4, message: 'Marriage scares the fuck outta me !!!'},
  {id: 5, message: 'And my married friends always said'},
  {id: 6, message: 'Run, You fools!'},
  {id: 7, message: 'So, I always Brushed it off....'},
  {id: 8, message: 'Bitch Please, marriage is not for me'},
  {id: 9, message: 'But one day i realized'},
  {id: 10, message: 'Nobody makes me happy like you does '},
  {
    id: 11,
    message:
      'But nobody ever made me feel like that before so my brain said \n\n impossible!',
  },
  {
    id: 12,
    message:
      'And realized that i do want to grow old with you , \n So my heart asked my Brain',
  },
  {id: 13, message: 'If you like it, why u not put ring on it'},
  {id: 14, message: 'So i thought about it...'},
  {id: 15, message: 'Like a Boss'},
  {id: 16, message: 'So Bhakti, i crazy bell...'},
  {id: 17, message: 'I proposed you again on your birthday'},
  {id: 18, message: 'Will you...'},
  {id: 19, message: '......'},
  {id: 20, message: '.......'},
  {id: 21, message: 'Will you marry me ?'},
  {id: 22, message: 'Ask Bhakti to marry me, \n\n She said yes'},
];

export default class App extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4,
          }).start();
        }
      },
    });
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: hp(40),
                width: wp(100),
                padding: 10,
                position: 'absolute',
              },
            ]}>
            {/*<Image*/}
            {/*  style={{*/}
            {/*    flex: 1,*/}
            {/*    height: null,*/}
            {/*    width: null,*/}
            {/*    borderRadius: 20,*/}
            {/*  }}*/}
            {/*  resizeMode={'contain'}*/}
            {/*  source={item.uri}*/}
            {/*/>*/}
            <View
              style={{
                borderRadius: 50,
                backgroundColor: '#e1e1e1',
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(40),
                width: '100%',
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: wp(10),
                  fontWeight: '200',
                  textAlign: 'center',
                }}>
                {item.message}
              </Text>
            </View>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                // opacity: this.nextCardOpacity,
                transform: [{scale: this.nextCardScale}],
                height: hp(40),
                width: wp(100),
                padding: 10,
                position: 'absolute',
              },
            ]}>
            {/*<Image*/}
            {/*  style={{*/}
            {/*    flex: 1,*/}
            {/*    height: null,*/}
            {/*    width: null,*/}
            {/*    borderRadius: 20,*/}
            {/*  }}*/}
            {/*  resizeMode={'contain'}*/}
            {/*  source={item.uri}*/}
            {/*/>*/}
            <View
              style={{
                borderRadius: 50,
                backgroundColor: '#e1e1e1',
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(40),
                width: '100%',
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: wp(10),
                  fontWeight: '200',
                  textAlign: 'center',
                }}>
                {item.message}
              </Text>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          height: hp(100),
          backgroundColor: 'white',
          width: wp(120),
        }}
        resizeMode={'cover'}
        source={require('../../../Assets/Images/PlaCards/plaCard.jpg')}>
        <View style={{height: hp(30)}} />
        <View style={{flex: 1}}>{this.renderUsers()}</View>
        <View style={{height: hp(30)}} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
