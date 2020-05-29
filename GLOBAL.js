import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import FixPromotionFooter from './SRC/Components/FixPromotionFooter';

class GLOBAL extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffdce0'}}>
        <StatusBar barStyle="dark-content" backgroundColor={'#ffdce0'} />
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            {this.props.children}
            <FixPromotionFooter />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
  }
}

export default GLOBAL;
