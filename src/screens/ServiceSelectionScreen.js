import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import CalcContext from '../context/CalcContext'

const ServiceSelectionScreen = ({ navigation }) => {
  const [service, setService] = useState('')
  const { searchTerms, addService } = useContext(CalcContext)

  // console.log('Search Term are now', searchTerms);

  const handleServiceChange = name => {
    setService(name);
    console.log(service);
  }

  const directToMonths = () => {
    addService(service);
    console.log('Search Term are now', searchTerms);
    searchTerms.selectedService = service;
    navigation.navigate('Months')
  }
  return (
    <SafeAreaView>
      <Text>Choose Your Service</Text>
      <Button title="Apple Music" onPress={() => handleServiceChange('Apple Music')}/>
      <Button title="YouTube" onPress={() => handleServiceChange('YouTube')}/>
      <Button title="Soundcloud" onPress={() => handleServiceChange('Soundcloud')}/>
      <Button title="Spotify" onPress={() => handleServiceChange('Spotify')}/>
      <Text>You Chose {service}</Text>
      <Button title="Go To Months" onPress={() => directToMonths()}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default ServiceSelectionScreen;
