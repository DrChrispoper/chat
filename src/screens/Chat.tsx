import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import Composer from '../containers/Composer';
import Messages from '../containers/Messages';

export default function Chat({ navigation }) {
  const [kShowing, setkShowing] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardWillShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardWillHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setkShowing(true);
  };

  const _keyboardDidHide = () => {
    setkShowing(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.inner, kShowing && styles.innerShowing]}>
          <Messages />
          <Composer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  innerShowing: {
    paddingBottom: 44,
  },
});
