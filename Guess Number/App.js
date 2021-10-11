import React, { useEffect, useState } from 'react';
import * as EL from 'react-native';
import Header from './components/Header';
import Start from './screens/Start';
import Game from './screens/Game';
import End from './screens/End';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [phase, setPhase] = useState(0);
  const [selNum, setSelNum] = useState(0); 
  const [rounds, setRounds] = useState(0);
  const [isDataLoaded, setDataLoaded] = useState(false);
  
  useEffect(()=>{
    Promise.all([fetchFont()]).then(()=>setDataLoaded(true));
    if(EL.I18nManager.isRTL){
      EL.I18nManager.allowRTL(false);  
      EL.I18nManager.forceRTL(false); 
    }
  },[]);

  return !isDataLoaded ? <AppLoading/> : (
  <EL.View style={styles.screen}>
    <EL.StatusBar backgroundColor="#c41d60"/>
    <Header title="Guess Number"/>
    {
      phase === 0 ? 
       <Start onStart={(num)=>{
        setPhase(1);
        setSelNum(num);
       }}/> : phase === 1 ?
       <Game exclude={selNum} onEnd={(round)=>{
        setPhase(2);
        setRounds(round);
       }}/>
       :
       <End 
        rounds={rounds} 
        number={selNum} 
        playAgain={()=>setPhase(0)}
      />
    }

  </EL.View>
  );
}

const styles = EL.StyleSheet.create({
  screen:{
    flex:1
  }
});