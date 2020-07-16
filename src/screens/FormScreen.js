import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native'
import CalcContext from '../context/CalcContext'
import { Input, Text, Button } from 'react-native-elements';

const streamInput = React.createRef();

const FormScreen = ({ navigation }) => {
  const [streams, setStreams] = useState('');
  const { label, input, button } = styles;

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
      <Input
        ref={streamInput}
        label='Enter The Number of Streams'
        labelStyle={label}
        inputStyle={input}
        value={streams}
        onChangeText={(text) => handleStreamChange(text)}
       />
       <Text h4>You chose {streams}</Text>
      <Button title="Go To Service" buttonStyle={button} onPress={() => directToService()}/>
      <Button title='Reset' buttonStyle={button} onPress={() => streamInput.current.clear()} />
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
  },
  button: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  }
});

export default FormScreen;
