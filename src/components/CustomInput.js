import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {fontSize, fonts} from '../constants/fonts';
import {colors} from '../constants/colors';

const CustomInput = props => {
  return (
    <View style={[{}, props.inputContainerStyle]}>
      <Text
        style={[
          {
            fontFamily: fonts.interMedium,
            fontSize: fontSize.l,
            textAlign: 'left',
            color: colors.gray,
          },
          props.labelStyle,
        ]}>
        {props.label}
      </Text>
      <TextInput
        style={[
          {
            paddingVertical: 10,
            borderRadius: 7,
            borderColor: colors.borderColor,
            borderWidth: 1,
            fontSize: fontSize.l,
            marginTop: 10,
            fontFamily: fonts.interMedium,
            color: colors.black,
            paddingLeft: 10,
          },
          props.textInputStyle,
        ]}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholderTextColor={colors.lightgrey}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      />
      {props.errorMessage && <Text>{props.errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;
