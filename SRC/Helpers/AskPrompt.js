import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from './screenHelper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const AskPrompt = ({
  visible = false,
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  const [txt, setTxt] = useState('');
  return (
    <Modal transparent animationType={'slide'} visible={visible}>
      <KeyboardAwareScrollView>
        <View style={Styles.mainContainer}>
          <View style={Styles.promptContainer}>
            <TouchableOpacity style={Styles.closeContainer} onPress={onCancel}>
              <Text style={Styles.closeText}>x</Text>
            </TouchableOpacity>
            <Text style={Styles.headerText}>
              Ask to your love for password to open Proposal placards
            </Text>
            <TextInput
              onChangeText={setTxt}
              style={Styles.txtInput}
              placeholder={'Enter Password'}
              secureTextEntry
            />
            <TouchableOpacity
              style={{...Styles.confirmButton}}
              onPress={() => onConfirm(txt)}>
              <Text
                style={{
                  ...Styles.confirmButtonText,
                }}>
                Confirm Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    height: hp(100),
    width: wp(100),
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(80),
    height: wp(60),
    backgroundColor: '#ffdce0',
    borderRadius: wp(5),
    padding: wp(5),
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp(5),
  },
  txtInput: {
    width: wp(70),
    textAlign: 'center',
    fontSize: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
  },
  confirmButton: {
    marginTop: wp(5),
    backgroundColor: 'pink',
    padding: hp(2),
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  confirmButtonText: {
    textAlign: 'center',
    fontSize: wp(4),
    fontWeight: 'bold',
    color: 'rgb(221,87,146)',
  },
  closeContainer: {
    alignItems: 'flex-end',
    width: wp(70),
  },
  closeText: {
    fontSize: wp(7),
    color: 'rgb(221,87,146)',
  },
});
export default AskPrompt;
