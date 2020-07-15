import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'

import { Button, Text } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.welcomeText}>
      <Text h3>Streaming Royalty Calculator</Text>
      <Text>Indie artists don't have to guess how much money one can make off of monthly streams. With this calculator you can find out right how.</Text>
      <Text>Just click the button below to start</Text>
      <Button title="Start Here" buttonStyle={styles.button} onPress={() => navigation.navigate('formFlow')}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  }
});

export default WelcomeScreen;
