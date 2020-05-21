import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

class GLOBAL extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(245,219,223)'}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            {this.props.children}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
  }
}

export default GLOBAL;
