import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../redux/store';
import Contact from '../components/Contact';
import { setSelContact, logout } from '../redux/actions';

const Contacts = ({ navigation }) => {
  const { contacts } = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();

  const onPressMessage = (contact: string) => {
    dispatch(setSelContact(contact));
    navigation.navigate('Chat');
  };

  const renderItem = ({ item }) => (
    <Contact contact={item} onPress={onPressMessage} />
  );

  const pressLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={pressLogout} title="Logout" />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default Contacts;
