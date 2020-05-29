import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {CIRCLE, CROSS} from './constants';
import Circle from './Circle';
import Cross from './Cross';
import FastImage from 'react-native-fast-image';
import {wp} from '../../../../Helpers/screenHelper';

export default class Tile extends Component {
  _renderContent() {
    switch (this.props.value) {
      case CIRCLE:
        return (
          <FastImage
            source={require('../../../../Assets/Images/TicTacToe/Boy.jpeg')}
            style={{...styles.myImage}}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      case CROSS:
        return (
          <FastImage
            source={require('../../../../Assets/Images/TicTacToe/Girl.jpeg')}
            style={{...styles.myImage}}
            resizeMode={FastImage.resizeMode.contain}
          />
        );
      default:
        return <Text style={styles.text} onPress={this._handlePress} />;
    }
  }

  _handlePress = () => {
    this.props.onPress(this.props.index);
  };

  render() {
    return <View style={styles.container}>{this._renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  text: {
    width: 100,
    height: 100,
  },
  myImage: {
    width: 100,
    height: 100,
  },
});
