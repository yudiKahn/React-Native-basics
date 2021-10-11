import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {enableScreens} from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import {MFF} from './navigation/Drawers';
import {Provider} from 'react-redux';
import store from './redux/store';

enableScreens();

export default function App() {
  const [isAssetsReady, setAssetsReady] = useState(false);

  useEffect(()=>{
    StatusBar.setBackgroundColor(styles.bgPrimary.backgroundColor);
    StatusBar.setBarStyle("light-content")
    fetchFont().then(()=>setAssetsReady(true));
    if(I18nManager.isRTL){
      I18nManager.allowRTL(false);  
      I18nManager.forceRTL(false); 
    }
  }, []);

  return !isAssetsReady ? <AppLoading/> : (<Provider store={store}>
    <NavigationContainer>
      <MFF/>
    </NavigationContainer>
  </Provider>);
}



function fetchFont(){
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
}