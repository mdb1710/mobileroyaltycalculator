import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const MonthsScreen = () => {
  const [months, setMonths] = useState('')
  const { input, label } = styles;

  const seeMonths = () => {
    console.log(months)
  }

  return (
    <View>
      <Text>Choose The Number of Months</Text>
      <TextInput style={input} value={months} onChangeText={(text) => setMonths(text)}/>
      <TouchableOpacity onPress={() => seeMonths()}>
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
  }
});

export default MonthsScreen;
