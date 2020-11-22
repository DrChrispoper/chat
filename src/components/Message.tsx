import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Message({ text }) {
  return (
    <View style={styles.message}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 32,
  },
});
