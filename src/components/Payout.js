import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalcContext from '../context/CalcContext'



const Payout = rate => {
   const { state } = useContext(CalcContext)
  // const { selectedStreams, selectedMonths, selectedService } = state
  // const { apple, youtube, soundcloud, spotify } = rates


  const { selectedStreams, selectedMonths } = state
  const newRate = rate.rate
  const stream = parseInt(selectedStreams);
  const time = parseInt(selectedMonths);




  const totalMoney = stream * time * newRate;


  return(
    <View style={styles.totalText}>
      <Text>For {time} month(s) you will get paid ${ totalMoney > 0 ? totalMoney.toFixed(2) : ''}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  totalText: {
    fontSize: 50
  }
});

export default Payout;
