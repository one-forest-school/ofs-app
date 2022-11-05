/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import Main from './main';
import {name as appName} from './app.json';

if(Platform.OS === 'ios'){
    AppRegistry.registerComponent('frontend', () => Main);
}else if (Platform.OS === 'android'){
    AppRegistry.registerComponent(appName, () => Main);
}

