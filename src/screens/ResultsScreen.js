import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CalcContext from '../context/CalcContext'

const ResultsScreen = () => {
  const { searchTerms } = useContext(CalcContext)

  console.log('Final terms are', searchTerms);

  const { selectedStreams, selectedService, selectedMonths } = searchTerms

  return(
    <View>
      <Text>We will show the results here</Text>
      <Text>Streams: {selectedStreams}</Text>
      <Text>Service: {selectedService}</Text>
      <Text>Months: {selectedMonths}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ResultsScreen;
