import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../redux/store';
import { login } from '../redux/actions';
import { validateEmail, validatePassword } from '../utils/utils';

export default function Login({ navigation }) {
  const [email, setemail] = useState('c@c.c');
  const [password, setpasswordl] = useState('1234');
  const { authed } = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();

  const tryLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      dispatch(login(email, password));
      setemail('');
      setpasswordl('');
    }
  };

  useEffect(() => {
    if (authed) {
      navigation.navigate('Contacts');
    }
  }, [authed]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setemail(text)}
        value={email}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setpasswordl(text)}
        value={password}
        placeholder={'Password'}
        secureTextEntry={true}
        onSubmitEditing={tryLogin}
      />
      <TouchableOpacity
        style={[styles.button, email != '' && password != '' && styles.enabled]}
        onPress={tryLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    height: 50,
    justifyContent: 'center',
    margin: 20,
  },
  enabled: {
    backgroundColor: '#f9c2ff',
  },
});
