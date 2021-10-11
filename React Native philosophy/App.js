import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './components/Home';
import Details from './components/Details';
import AllQuotes from './components/AllQuotes';
import {Home as ThinkerHome} from './components/Thinker';

function App() {
  const Stack = createStackNavigator();

  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: "Home"}}/>
      <Stack.Screen name="Details" component={Details} options={{title: "Details"}}/>      
      <Stack.Screen name="AllQuotes" component={AllQuotes} options={{title: "AllQuotes"}}/>
      <Stack.Screen name="Thinker" component={ThinkerHome} options={{title: "Thinker"}}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

export default App;