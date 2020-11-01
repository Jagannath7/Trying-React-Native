import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Starting an Awesome Project with React Native.</Text>
      <View style={styles.small}>
        <Text>Small</Text>
      </View>
      <View style={styles.medium}>
        <Text>Medium</Text>
      </View>
      <View style={styles.large}>
        <Text>Large</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  medium: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue'
  },
  large: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue'
  }
});
