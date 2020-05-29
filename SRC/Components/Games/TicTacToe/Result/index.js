import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {USER_FIGURE, AI_FIGURE, DRAW} from '../Game/constants';
import {wp} from '../../../../Helpers/screenHelper';

export default class Result extends Component {
  _getResultMessage() {
    const {result} = this.props;

    switch (result) {
      case USER_FIGURE:
        return 'Bhakti won the game';
      case AI_FIGURE:
        return 'Siddharth won the game';
      case DRAW:
        return 'Draw';
    }
  }
  render() {
    const {onRestartGameBtnClick} = this.props;

    return (
      <View style={{width: wp(100)}}>
        <Text style={styles.result}>{this._getResultMessage()}</Text>
        <TouchableOpacity onPress={onRestartGameBtnClick}>
          <Text style={styles.instructions}>Touch here to play again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    fontSize: wp(6),
    margin: 18,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});
