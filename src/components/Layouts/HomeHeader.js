import {View, Text, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {fontSize, fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../constants/imagePaths';

const HomeHeader = ({title, isbell = false}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',

      }}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => navigation.toggleDrawer()}>
        <Image
          source={Images.ic_homeIcon}
          style={{height: 40, width: 40, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: fontSize.xxxl,
          lineHeight: fontSize.xxxxl,
          color: colors.black,
          fontFamily:fonts.interMedium
        }}>
        {title}
      </Text>
      {isbell ? (
        <TouchableOpacity onPress={()=>Alert.alert("Notification","You Do Not Have Any Notifications")}>
          <Image source={Images.ic_bell} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  mainContainer: {},
});
