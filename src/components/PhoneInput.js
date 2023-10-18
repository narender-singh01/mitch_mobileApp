import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneInput = ({
  onChangeText,
  value,
  placeholder,
  customContainerStyle,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  return (
    <View style={[styles.mainContainer, customContainerStyle]}>
      <>
        <Text
          style={{
            fontFamily: fonts.interMedium,
            fontSize: fontSize.l,
            textAlign: 'left',
            color: colors.gray,
          }}>
          Phone no.*
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.borderColor,
              flex: 1,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              height: 48,
            }}
            onPress={() => {
              setIsPickerVisible(true);
            }}>
            <CountryPicker
              onSelect={selectedCountry => {
                setSelectedCountry(selectedCountry);
                setIsPickerVisible(false);
              }}
              withEmoji={false}
              withCallingCode={true}
              countryCode={true}
              containerButtonStyle={{display: 'none'}}
              // {...{ withCallingCode,countryCode}}
              visible={isPickerVisible}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: fontSize.l,
                color:
                  selectedCountry != null ? colors.black : colors.lightgrey,
              }}>
              {selectedCountry != null
                ? `+${selectedCountry.callingCode}`
                : '+91'}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.numberInput}
            onChangeText={onChangeText}
            value={value}
            maxLength={10}
            placeholder={placeholder}
            placeholderTextColor={colors.lightgrey}
            keyboardType={'number-pad'}
          />
        </View>
      </>
    </View>
  );
};

export default PhoneInput;
const styles = StyleSheet.create({
  mainContainer: {marginLeft: 4},
  inputContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 15},
  conuntryCodeInput: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    flex: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: fontSize.l,
    color: colors.lightgrey,
  },
  numberInput: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    flex: 5,
    borderRadius: 8,
    marginLeft: 20,
    fontSize: fontSize.l,
    color: colors.black,
    paddingLeft: 10,
    paddingVertical: 10,
  },
});
