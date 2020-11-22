import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contact({ contact, onPress }) {
  return (
    <TouchableOpacity
      style={styles.contact}
      onPress={() => onPress(contact.id)}
    >
      <Text style={styles.fullname}>{contact.fullname}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contact: {
    padding: 20,
    marginVertical: 5,
    flex: 1,
  },
  fullname: {
    fontSize: 32,
  },
});
