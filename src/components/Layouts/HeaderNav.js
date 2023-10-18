import {View, Text, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {fontSize, fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../constants/imagePaths';

const HeaderNav = ({title, isbell = false, isBottomLine = false}) => {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.mainContainer,
        isBottomLine
          ? {borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}
          : {},
      ]}>
      <TouchableOpacity onPress={() => backAction()} style={styles.backBtn}>
        <Image source={Images.ic_navArrow} style={styles.headerIcon} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      {isbell ? (
        <TouchableOpacity 
        onPress={()=>Alert.alert("Notification","You Do Not Have Any Notifications")}
        >
          <Image source={Images.ic_bell} style={styles.headerIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HeaderNav;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  backBtn: {alignItems: 'center', justifyContent: 'center'},
  headerIcon: {height: 20, width: 20, resizeMode: 'contain'},
  titleText: {
    fontFamily: fonts.poppinsMedium,
    textAlign: 'center',
    fontSize: fontSize.xxxl,
    lineHeight: fontSize.xxxxl,
    color: colors.black,
    fontWeight:"700"
  },
});
