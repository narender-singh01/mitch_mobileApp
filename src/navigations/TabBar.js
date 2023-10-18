// import React from 'react';
// import {Image} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Images} from '../constants/imagePaths';
// import Profile from '../screens/Profile';
// import Cart from '../screens/Cart';
// import Favorites from '../screens/Favorites';
// import DrawerNav from './DrawerNav';

// const Tab = createBottomTabNavigator();
// const TabBar = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//         headerShown: false,
//         tabBarStyle: {paddingVertical: 20, justifyContent: 'center'},
//       }}>
//       <Tab.Screen
//         name="HomeTab"
//         component={DrawerNav}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => <Image source={Images.ic_home} />,
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={Favorites}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => <Image source={Images.ic_favorites} />,
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => <Image source={Images.ic_cart} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => <Image source={Images.ic_profile} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabBar;
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../constants/imagePaths';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Favorites from '../screens/Favorites';
import DrawerNav from './DrawerNav';
import {colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primaryBtn,
        headerShown: false,
        tabBarStyle: {   paddingVertical: 20,
          justifyContent: 'center',
          borderTopStartRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white
        
        },
        tabBarIcon: ({color, size}) => {
          let iconSource;

          if (route.name === 'HomeTab') {
            iconSource = Images.ic_home;
          } else if (route.name === 'Favorites') {
            iconSource = Images.ic_favorites;
          } else if (route.name === 'Cart') {
            iconSource = Images.ic_cart;
          } else if (route.name === 'Profile') {
            iconSource = Images.ic_profile;
          }

          return <Image source={iconSource} style={{tintColor: color}} />;
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={DrawerNav}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{tabBarLabel: ''}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
const styles=StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
})