import React, {useContext, useState} from "react";
import {View, StyleSheet } from "react-native";
import { Text, Button } from 'react-native-elements'
import CalcContext from "../context/CalcContext";
import Payout from '../components/Payout';

const ResultsScreen = ({ navigation }) => {
  const { state, rates } = useContext(CalcContext);

  console.log("Final terms are", state);
  const { apple, youtube, soundcloud, spotify } = rates
  const { selectedStreams, selectedService, selectedMonths } = state;
  const [serviceRate, setServiceRate] = useState(0);

  const seePayout = () => {
    switch (selectedService){
      case ('Apple Music'):
        console.log(selectedService, 'Apple Music')
        setServiceRate(apple)
        break
      case ('YouTube'):
        setServiceRate(youtube)
        break;
      case ('Soundcloud'):
        setServiceRate(soundcloud);
        break
      default:
        console.log(selectedService, 'Spotify')
        setServiceRate(spotify);
    }

    return serviceRate
  }

  return (
    <View>
      <Text h4> We will show the results here </Text>
      <Text h4> Streams: {selectedStreams} </Text>
      <Text h4> Service: {selectedService} </Text>
      <Text h4> Months: {selectedMonths} </Text>
      <Button
        title="Back To Start"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("formFlow")}
      />
      <Button
        title="See Payout"
        buttonStyle={styles.button}
        onPress={() => seePayout()}
      />
      <Payout rate={ serviceRate }/>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default ResultsScreen;
