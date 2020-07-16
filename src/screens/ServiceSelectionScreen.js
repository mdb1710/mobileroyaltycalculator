import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import CalcContext from '../context/CalcContext'

const ServiceSelectionScreen = ({ navigation }) => {
  const [service, setService] = useState('')
  const { state, addService } = useContext(CalcContext)

  // console.log('Search Term are now', searchTerms);

  const handleServiceChange = name => {
    setService(name);
    console.log(service);
  }

  const directToMonths = () => {
    addService(service);
    console.log('Search Term are now', state);
    // searchTerms.selectedService = service;
    console.log('Is service added?', state);
    navigation.navigate('Months')
  }
  return (
    <SafeAreaView>
      <Text h3>Choose Your Service</Text>
      <Button title="Apple Music" buttonStyle={styles.button} onPress={() => handleServiceChange('Apple Music')}/>
      <Button title="YouTube" buttonStyle={styles.button} onPress={() => handleServiceChange('YouTube')}/>
      <Button title="Soundcloud" buttonStyle={styles.button} onPress={() => handleServiceChange('Soundcloud')}/>
      <Button title="Spotify" buttonStyle={styles.button} onPress={() => handleServiceChange('Spotify')}/>
      <Text h4>You Chose {service}</Text>
      <Button title="Go To Months" buttonStyle={styles.button} onPress={() => directToMonths()}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  }
});

export default ServiceSelectionScreen;
