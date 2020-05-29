import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  ImageBackground,
  Animated,
  PanResponder,
} from 'react-native';
import PlacardJson from '../../../../plaCard.json';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import {hp, wp} from '../../../Helpers/screenHelper';
import GLOBAL from '../../../../GLOBAL';
// import {err} from 'react-native-svg/lib/typescript/xml';
const Users = PlacardJson;

// SOUNDS
var SoundPlayer = require('react-native-sound');
var song = null;

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
  componentDidMount(): void {
    song = new SoundPlayer('kauntuje.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error while playing audio 1');
      } else {
        if (song !== null) {
          song.play((success) => {
            if (!success) {
              console.log('Error while playing audio 2');
            }
          });
        }
      }
    });
  }
  componentWillUnmount(): void {
    song.stop();
    song = null;
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
                height: hp(25),
                width: wp(55),
                padding: 10,
                alignSelf: 'center',
                justifySelf: 'center',
                position: 'absolute',
                marginTop: hp(5),
              },
            ]}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: 'rgb(234,243,238)',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: 'center',
                width: '100%',
                height: '100%',
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: wp(5),
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
                height: hp(25),
                width: wp(55),
                padding: 10,
                alignSelf: 'center',
                justifySelf: 'center',
                position: 'absolute',
                marginTop: hp(5),
              },
            ]}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: 'rgb(234,243,238)',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: 'center',
                width: '100%',
                height: '100%',
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: wp(5),
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
  openWhatsapp = () => {
    let wpMessage =
      '*Thanks For your auspicious gift* \n' +
      'This is Awkward but bear with me😅 \n' +
      'I have been thinking about us 🙈\n\n I know you always said\n' +
      'Marriage😱 scares the fuck outta me !!!\n' +
      'And my married friends always said\n' +
      'Run, You fools!🤣\n' +
      'So, I always Brushed it off😗....\n' +
      'Bitch Please, marriage is not for me😋\n' +
      'But one day i realized\n' +
      'Nobody makes me happy like you do🥰\n' +
      'But nobody ever made me feel like that before so my brain said \nimpossible!😣\n' +
      'And realized that i do want to grow old with you , \n So my heart asked my Brain🙄\n' +
      'If you like it, why u not put ring💍 on it\n' +
      'So i thought about it...🤔\n' +
      'Like a Boss😎\n' +
      'So Siddharth, i crazy bell...😜\n' +
      'Will you...🤨\n' +
      '......\n' +
      '.......\n' +
      '*Will you marry me ?*❤️\n' +
      '*I Love you Siddharth* 💘\n' +
      '- From *Bhakti* 💘';
    let url = `https://api.whatsapp.com/send?phone=918160403723&text=${wpMessage}`;
    song.stop()
    Linking.openURL(url);
    this.props.navigation.navigate('Home2Component');
  };
  render() {
    return (
      <GLOBAL>
        <View
          style={{
            flex: 1,
            width: wp(100),
            height: wp(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            style={{
              flex: 1,
              height: hp(100),
              width: wp(100),
            }}
            resizeMode={'stretch'}
            source={require('../../../Assets/Images/PlaCards/man_plaCard.jpeg')}>
            <View style={{height: hp(30)}} />
            <View style={{flex: 1}}>
              {this.state.currentIndex === Users.length
                ? this.openWhatsapp()
                : this.renderUsers()}
            </View>
            <View style={{height: hp(30)}} />
          </ImageBackground>
        </View>
      </GLOBAL>
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
