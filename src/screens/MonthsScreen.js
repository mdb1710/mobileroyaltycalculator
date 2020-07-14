import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CalcContext from '../context/CalcContext'

const MonthsScreen = ({ navigation }) => {
  const { searchTerms, addMonths } = useContext(CalcContext);

  const [months, setMonths] = useState('')
  const { input, label, submitStyle } = styles;

  const seeMonths = () => {
    console.log(months)
  }

  const directToResults = () => {
    addMonths(months)
    console.log(searchTerms);
    searchTerms.selectedMonths = months;
    console.log('Terms are now', searchTerms);
    navigation.navigate('Results')
  }

  return (
    <View>
      <Text>Choose The Number of Months</Text>
      <TextInput style={input} value={months} onChangeText={(text) => setMonths(text)}/>
      <TouchableOpacity style={submitStyle} onPress={() => directToResults()}>
        <Text>Submit</Text>
      </TouchableOpacity>
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
