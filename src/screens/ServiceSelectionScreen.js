import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';

const ServiceSelectionScreen = () => {
  const [service, setService] = useState('')
  const handleServiceChange = name => {
    setService(name);
    console.log(service);
  }
  return (
    <SafeAreaView>
      <Text>Choose Your Service</Text>
      <Button title="Apple Music" onPress={() => handleServiceChange('Apple Music')}/>
      <Button title="YouTube" onPress={() => handleServiceChange('YouTube')}/>
      <Button title="Soundcloud" onPress={() => handleServiceChange('Soundcloud')}/>
      <Button title="Spotify" onPress={() => handleServiceChange('Spotify')}/>
      <Text>You Chose {service}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default ServiceSelectionScreen;
