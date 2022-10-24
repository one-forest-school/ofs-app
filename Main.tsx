import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import App from './app/App';

const Main = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
        <App />
    </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
