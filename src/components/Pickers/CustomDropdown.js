import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Images} from '../../constants/imagePaths';
import {colors} from '../../constants/colors';
import {fontSize, fonts} from '../../constants/fonts';
import CountryPicker from 'react-native-country-picker-modal';

const CustomDropdown = ({
  options,
  onSelect,
  label,
  labelStyle,
  customDropDownStyle,

  isCountryDropdown = false,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View style={[{marginTop: 15}]}>
      <Text
        style={[
          {
            fontFamily: fonts.interMedium,
            fontSize: fontSize.l,
            textAlign: 'left',
            color: colors.gray,
          },
          labelStyle,
        ]}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => {
          !isCountryDropdown ? toggleDropdown() : setIsPickerVisible(true);
        }}
        style={[styles.dropdownButton, customDropDownStyle]}>
        <Text
          style={{
            fontFamily: fonts.interMedium,
            color: selectedCountry != null ? colors.black : colors.lightgrey,
          }}>
          {selectedCountry
            ? selectedCountry.name
            : 'Select an option' && selectedOption
            ? selectedOption
            : 'Select an option'}
        </Text>
        <Image source={isOpen ? Images.ic_arrowDown : Images.ic_arrowDown} />
      </TouchableOpacity>
      {isOpen && !isCountryDropdown ? (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}
              style={styles.optionItem}>
              <Text style={{fontSize: fontSize.m, color: colors.black}}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <CountryPicker
          onSelect={selectedCountry => {
            setSelectedCountry(selectedCountry);
            setIsPickerVisible(false);
          }}
          onClose={() => {
            setIsPickerVisible(false);
          }}
          withEmoji={false}
          withCallingCode={true}
          countryCode={true}
          containerButtonStyle={{display: 'none'}}
          // {...{ withCallingCode,countryCode}}
          visible={isPickerVisible}
        />
      )}
    </View>
  );
};

const styles = {
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 7,
    marginTop: 10,
  },
  dropdownOptions: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
};

export default CustomDropdown;
