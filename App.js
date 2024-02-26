import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;
