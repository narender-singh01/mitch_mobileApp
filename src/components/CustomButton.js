import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';

const CustomButton = ({
  title,
  isPrimary = true,
  customContainerStyle,
  customTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        !isPrimary && {backgroundColor: colors.white},
        customContainerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.btnTxt,
          !isPrimary && {color: colors.btnTxt},
          customTextStyle,

        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primaryBtn,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.btnBorder,
  },
  btnTxt: {
    fontFamily:fonts.interMedium,
    color: colors.white,
    fontSize: fontSize.xxl,
    marginVertical: 15,
    textAlign:"center"
  },
});
