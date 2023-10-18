import {View, TextInput, StyleSheet, Alert} from 'react-native';
import React, {useState, useRef} from 'react';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';

const OtpInput = ({onChangeText}) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  for (let i = 0; i < 6; i++) {
    inputRefs.current[i] = React.createRef();
  }

  const handleOtpInputChange = (index, text) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);
    if (isNaN(text)) {
      return Alert.alert('OTP', 'Entered Value is Not a Valid Number');
    }
    if (index < inputRefs.current.length - 1 && text !== '') {
      inputRefs.current[index + 1].focus();
    }

    const joinedOtp = newOtpValues.join('');
    onChangeText(joinedOtp);
  };

  const handleBackspace = (index, event) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      const updatedOtp = [...otpValues];
      updatedOtp[index - 1] = '';
      setOtpValues(updatedOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={{marginLeft: 4}}>
      <View style={styles.otpInputContainer}>
        {[0, 1, 2, 3, 4, 5].map(index => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            placeholder="-"
            placeholderTextColor={colors.gray}
            onChangeText={text => handleOtpInputChange(index, text)}
            onKeyPress={e => handleBackspace(index, e)}
            value={otpValues[index]}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  otpInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  otpInput: {
    fontFamily: fonts.interMedium,
    borderWidth: 1,
    borderColor: colors.borderColor,
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 2,
    textAlign: 'center',
    fontSize: fontSize.xxxxl,
    color: colors.black,
  },
});
