import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './src/screens/WelcomeScreen'
import FormScreen from './src/screens/FormScreen'
import { CalcProvider } from './src/context/CalcContext'
import ServiceSelectionScreen from './src/screens/ServiceSelectionScreen'
import MonthsScreen from './src/screens/MonthsScreen'
import ResultsScreen from './src/screens/ResultsScreen'

// const navigator = createStackNavigator({
//   Welcome: WelcomeScreen,
//   Form: FormScreen,
//   Service: ServiceSelectionScreen,
//   Months: MonthsScreen,
//   Results: ResultsScreen
// }, {
//   initialRouteName: 'Welcome',
//   defaultNavigationOptions: {
//     title: 'Royalty Calculator'
//   }
// })

const switchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  formFlow: createStackNavigator({
    Form: FormScreen,
    Service: ServiceSelectionScreen,
    Months: MonthsScreen
  }),
  resultsFlow: createStackNavigator({
    Results: ResultsScreen
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <CalcProvider>
      <App />
    </CalcProvider>
  )
}
