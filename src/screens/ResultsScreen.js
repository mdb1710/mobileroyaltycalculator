import React, {useContext} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import CalcContext from "../context/CalcContext";

const ResultsScreen = ({ navigation }) => {
  const { state } = useContext(CalcContext);

  console.log("Final terms are", state);

  const { selectedStreams, selectedService, selectedMonths } = state;

  const seePayout = () => {
    console.log(selectedService);
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsScreen;
