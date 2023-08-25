import React, { useEffect } from 'react';
import Navigation from './Navigation.js';
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <>      
     <Navigation />
    </>

  )
}
export default App;