import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.welcomeText}>
      <Text>Welcome to your Calculator</Text>
      <Button title="Start Here" onPress={() => navigation.navigate('formFlow')}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 48
  }
});

export default WelcomeScreen;
