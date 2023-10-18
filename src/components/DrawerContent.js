import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Images} from '../constants/imagePaths';
import {fontSize} from '../constants/fonts';
import {colors} from '../constants/colors';
const DrawerContent = ({navigation}) => {
  const itemNavigation = screenName => {
    navigation.navigate(screenName);
  };
  const onLogoutClick = async () => {
    try {
      Alert.alert('Logout', 'Are you sure You want to logout?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => handleLogout()},
      ]);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLogout = () => {
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={{color: 'black'}}>Menu</Text>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Notification', 'You Do Not Have Any Notifications')
          }>
          <Image source={Images.ic_bell} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderColor: colors.gray,
          borderWidth: 1,
        }}
      />
      <View style={styles.menuContainer}>
        <View style={styles.adminContainer}>
          <Image source={Images.ic_bestSeller5} style={styles.adminPhoto} />
          <Text style={styles.adminTitle}>{'John'}</Text>
        </View>
        <TouchableOpacity
          style={[styles.menuItemContainer, {marginTop: 10}]}
          onPress={() => itemNavigation('Profile')}>
          <Text style={styles.menuItemTxt}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItemContainer, {marginTop: 10}]}
          onPress={() => itemNavigation('Category')}>
          <Text style={styles.menuItemTxt}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemContainer}
          onPress={() => itemNavigation('MyOrders')}>
          <Text style={styles.menuItemTxt}>MyOrders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemContainer}
          onPress={() => onLogoutClick()}>
          <Text style={styles.logoutBtn}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  notificationIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuContainer: {
    marginTop: 20,
    marginHorizontal: 18,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  menuItemTxt: {
    fontSize: fontSize.xl,
    marginLeft: 5,
    color: colors.gray,
  },
  accountContainer: {
    borderRadius: 100,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  accountImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountDetail: {
    paddingLeft: 20,
    fontSize: fontSize.xl,
    flex: 7,
    color: 'black',
  },
  desDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtn: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '700',
    color: 'red',
  },
  adminContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  adminPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  adminTitle: {
    marginTop: 10,
    fontSize: fontSize.xxl,
    color: colors.black,
    fontWeight: 'bold',
  },
});
