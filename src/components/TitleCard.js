import React from 'react';
import { Text,  } from 'react-native'
import { Card, Button } from 'react-native-elements'

const TitleCard = () => {
return(
  <Card
    title="Streaming Royalty Calculator"
    image={require('../images/songwriter.jpg')}
  >
  <Text>Indie artists don't have to guess how much money one can make off of monthly streams. With this calculator you can find out right how.</Text>
  <Text>Just click the button below to start</Text>
  </Card>
)


}

export default TitleCard;
