import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../redux/store';
import { addMessage } from '../redux/actions';
import { Message } from '../utils/types';
import moment from 'moment';

export default function Footer() {
  const { selectedContact } = useSelector(
    (state: ApplicationState) => state.user
  );
  const [text, settext] = useState('');
  const dispatch = useDispatch();

  const send = () => {
    if (text != '') {
      const newMessage: Message = {
        id: moment().toISOString(),
        message: text,
        contact: selectedContact,
        time: moment().toString(),
      };
      dispatch(addMessage(newMessage));
      settext('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => settext(text)}
          value={text}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, text != '' && styles.enabled]}
        onPress={send}
      >
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flex: 0,
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  enabled: {
    backgroundColor: '#f9c2ff',
  },
});
