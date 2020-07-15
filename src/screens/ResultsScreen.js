import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import CalcContext from "../context/CalcContext";
import Payout from '../components/Payout';

const ResultsScreen = ({ navigation }) => {
  const { state, rates } = useContext(CalcContext);

  console.log("Final terms are", state);
  const { apple, youtube, soundcloud, spotify } = rates
  const { selectedStreams, selectedService, selectedMonths } = state;
  const [serviceRate, setServiceRate] = useState(0);

  const seePayout = () => {
    let appleMusic = 'Apple Music'
    let youTube = 'YouTube'
    let soundCloud = 'Soundcloud'


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
      <Text> We will show the results here </Text>
      <Text> Streams: {selectedStreams} </Text>
      <Text> Service: {selectedService} </Text>
      <Text> Months: {selectedMonths} </Text>
      <Button
        title="Back To Start"
        onPress={() => navigation.navigate("formFlow")}
      />
      <Button
        title="See Payout"
        onPress={() => seePayout()}
      />
      <Payout rate={ serviceRate }/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsScreen;
