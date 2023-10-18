import {View} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;
