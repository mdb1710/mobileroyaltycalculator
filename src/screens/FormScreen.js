import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import CalcContext from '../context/CalcContext'

const FormScreen = ({ navigation }) => {
  const [streams, setStreams] = useState('');
  const { label, input } = styles;

  const { addStreams } = useContext(CalcContext)
  // const onPress = () => {
  //   console.log('this many', streams);
  //
  // }

  const directToService = () => {
    addStreams(streams)
    console.log('First time', streams)
    // searchTerms.selectedStreams = streams;
    navigation.navigate('Service')
  }

  const handleStreamChange = number => {
    console.log(number)
    setStreams(number);

  }

  return(
    <View>
      <Text>Enter The Number of Streams</Text>
      <TextInput style={input} value={streams} onChangeText={(text) => handleStreamChange(text)}/>
      <Text>You chose {streams}</Text>
      <Button title="Go To Service" onPress={() => directToService()}/>
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
