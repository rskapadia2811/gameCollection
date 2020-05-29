import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Linking,
  Text,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
// import {NavigationActions, StackActions} from 'react-navigation';
import Game from './Game';
import {hp, wp} from '../../../Helpers/screenHelper';
import Result from './Result';
import GLOBAL from '../../../../GLOBAL';

export default class TicTacToeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  handleGameFinish = (result) => {
    this.setState({result});
  };

  handleGameRestart = () => {
    const {navigation} = this.props;
    navigation.replace('TicTacToeComponent');
  };
  goToHome2Component = () => {
    Alert.alert(
      'I love you 🐼 Bhakti ♥️',
      "Roses🌹 are RED, violets are blue, i've never met anyone as beautiful 👧 as you",
      [
        {
          text: 'I love you 🐼 Siddharth',
          onPress: () => {
            let message =
              "*I love you 🐼 too Siddharth* ♥️ \n Roses🌹 are RED, violets are blue, i've never met anyone as beautiful 👧 as you";
            let url = `https://api.whatsapp.com/send?phone=918160403723&text=${message}`;
            Linking.openURL(url);
            this.props.navigation.navigate('Home2Component');
          },
        },
      ],
      {cancelable: false},
    );
  };
  render() {
    return (
      <GLOBAL>
        <View style={styles.container}>
          <FastImage
            source={require('../../../Assets/Images/canYouFireMe.png')}
            style={{width: wp(80), height: 50, marginBottom: hp(2)}}
            resizeMode={'contain'}
          />
          <Text>Love ♥️ Tic Tac Toe</Text>
          <View pointerEvents={this.state.result ? 'none' : 'auto'}>
            <Game onFinish={this.handleGameFinish} />
          </View>
          {this.state.result && (
            <Result
              result={this.state.result}
              onRestartGameBtnClick={this.handleGameRestart}
            />
          )}
          <TouchableOpacity
            style={{...styles.startYourGameButton}}
            onPress={() => this.goToHome2Component()}>
            <Text
              style={{
                ...styles.startYourGameText,
              }}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </GLOBAL>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: hp(8),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  startYourGameButton: {
    marginTop: wp(5),
    width: wp(50),
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
