import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import CalcContext from '../context/CalcContext'

const monthsInput = React.createRef()

const MonthsScreen = ({ navigation }) => {
  const { state, addMonths } = useContext(CalcContext);

  const [months, setMonths] = useState('')
  const { input, label, submitStyle } = styles;

  // const seeMonths = () => {
  //   console.log(months)
  // }

  const directToResults = () => {
    addMonths(months)
    console.log(state);
    // searchTerms.selectedMonths = months;
    console.log('Terms are now', state);
    navigation.navigate('Results')
  }

  return (
    <View>
      <Input ref={monthsInput} label='Choose The Number of Months' labelStyle={label} inputStyle={input} value={months} onChangeText={(text) => setMonths(text)}/>
      <Text h4>You chose {months}</Text>
      <Button title='Submit' buttonStyle={submitStyle} onPress={() => directToResults()} />
      <Button title='Reset' buttonStyle={submitStyle} onPress={() => monthsInput.current.clear()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black'
  },
  label: {
    fontSize: 20
  },
  submitStyle: {
    marginTop: 25
  }
});

export default MonthsScreen;
