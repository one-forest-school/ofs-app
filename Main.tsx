import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import App from './app/app';
import customTheme from './app/theme/theme';

const Main = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <App />
        </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
