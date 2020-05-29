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
import AskPrompt from '../Helpers/AskPrompt';
class Home2Component extends Component {
  constructor() {
    super();
    this.state = {
      visibleAskPrompt: false,
    };
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
  moveToTicTacToeScreen = () => {
    this.props.navigation.navigate('TicTacToeComponent');
  };

  movePlaCardsScreen = () => {
    this.setState({
      visibleAskPrompt: true,
    });
  };
  render() {
    const {visibleAskPrompt} = this.state;
    return (
      <GLOBAL>
        <View style={Styles.mainContainer}>
          <AskPrompt
            visible={visibleAskPrompt}
            onCancel={() => {
              this.setState({
                visibleAskPrompt: false,
              });
            }}
            onConfirm={(txt) => {
              if (txt.trim() === 'Slayers') {
                this.setState(
                  {
                    visibleAskPrompt: false,
                  },
                  () => {
                    this.props.navigation.navigate('PlaCardsComponent');
                  },
                );
              } else {
                alert('Sorry, Wrong password');
              }
            }}
          />
          <FastImage
            source={require('../Assets/Images/pick_your.png')}
            style={{height: wp(50), width: wp(80)}}
            resizeMode={'contain'}
          />
          <TouchableOpacity
            style={Styles.pickYourChallangeParentContainer}
            onPress={() => this.moveToTicTacToeScreen()}>
            <View style={Styles.pickYourChallangeContainer}>
              <Text style={{fontSize: wp(5)}}>Can you fire me ?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.pickYourChallangeParentContainer}
            onPress={() => this.movePlaCardsScreen()}>
            <View style={Styles.pickYourChallangeContainer}>
              <Text style={{fontSize: wp(5)}}>Placards proposal</Text>
            </View>
          </TouchableOpacity>
          <Animated.View
            style={{
              ...Styles.heartImageContainer,
              justifyContent: 'flex-end',
              bottom: this.heartPhotoSlideUp.interpolate({
                inputRange: [0, 1],
                outputRange: [-hp(50), hp(-10)],
              }),
            }}>
            <FastImage
              source={require('../Assets/Images/mainBackground.jpg')}
              style={{
                width: hp(30),
                height: hp(30),
                backgroundColor: 'green',
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pickYourChallangeContainer: {
    borderWidth: 2,
    backgroundColor: 'pink',
    borderColor: 'rgb(221,87,146)',
    borderStyle: 'dashed',
    padding: 15,
    borderRadius: 10,
  },
  pickYourChallangeParentContainer: {
    marginVertical: 15,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
});

export default Home2Component;
