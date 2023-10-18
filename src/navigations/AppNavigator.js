import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import OnBoarding from '../screens/OnBoarding';
import SignUpSuccess from '../screens/SignUpSuccess';
import Verification from '../screens/Verification';
import Preferences from '../screens/Preferences';
import LoginVerification from '../screens/LoginVerification';
import LoginSuccess from '../screens/LoginSuccess';
import TabBar from './TabBar';
import Category from '../screens/Category';
import SignUpForm from '../screens/SignUpForm';
import ProductDetailModal from '../components/Modals/ProductDetailModal';
import Payment from '../screens/Payment';
import MyOrders from '../screens/MyOrders';
import OrderPreview from '../screens/OrderPreview';
import OrderSuccessModal from '../components/Modals/OrderSuccessModal';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="LoginVerification" component={LoginVerification} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
        <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="ProductDetailModal" component={ProductDetailModal}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="OrderPreview" component={OrderPreview} />
        <Stack.Screen name="OrderSuccessModal" component={OrderSuccessModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
