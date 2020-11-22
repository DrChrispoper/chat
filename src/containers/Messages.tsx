import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux/store';
import Message from '../components/Message';

export default function Messages() {
  const { messages, selectedContact } = useSelector(
    (state: ApplicationState) => state.user
  );

  const renderItem = ({ item }) => <Message text={item.message} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={messages.filter(m => m.contact == selectedContact)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
