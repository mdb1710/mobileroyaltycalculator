import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const FormScreen = ({ navigation }) => {
  const [streams, setStreams] = useState('');
  const { label, input } = styles;

  // const onPress = () => {
  //   console.log('this many', streams);
  //
  // }

  return(
    <View>
      <Text>Enter The Number of Streams</Text>
      <TextInput style={input} value={streams} onChangeText={(text) => setStreams(text)}/>
      <Text>You chose {streams}</Text>
      <Button title="Go To Service" onPress={() => navigation.navigate('Service')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black'
  },
  label: {
    fontSize: 20
  }
});

export default FormScreen;
