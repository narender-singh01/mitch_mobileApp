import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from '../components/DrawerContent';
import Home from '../screens/Home';
import Category from '../screens/Category';
import MyOrders from '../screens/MyOrders';
import Login from '../screens/Login';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
