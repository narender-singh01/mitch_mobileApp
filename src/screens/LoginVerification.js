import {View, StyleSheet, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import HeaderNav from '../components/Layouts/HeaderNav';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fonts';
import CustomButton from '../components/CustomButton';
import {vs} from 'react-native-size-matters';
import OtpInput from '../components/OtpInput';
import AppLayout from '../components/Layouts/AppLayout';
import { textSettings } from '../constants/globalConstants';
const LoginVerification = ({navigation}) => {
  const [input, setInput] = useState();
  const handleSubmit = () => {
    if (input === '123456') {
      navigation.navigate('LoginSuccess');
    } else {
      Alert.alert('Login', 'Incorrect OTP');
    }
  };
  return (
    <AppLayout
      containerStyle={{
        paddingBottom: 15,
      }}>
      <HeaderNav title={'Login'} />
      <View style={[styles.textContainer]}>
        <Text style={styles.verificationText}>Verification</Text>
        <Text style={styles.otpText}>
          Enter the code from the sms we sent you
        </Text>
      </View>
      <Text style={styles.otpTimer}>05:00</Text>
      <OtpInput value={input} onChangeText={value => setInput(value)} />
      <View style={styles.btnContainer}>
        <CustomButton
          title={textSettings.submit}
          onPress={() => handleSubmit()}
        />
        <Text
          style={{marginTop: 10, textAlign: 'center', fontSize: fontSize.l}}>
          I didn’t receive the code!
          <Text
            style={styles.resendText}
            onPress={() =>
              Alert.alert('Login', 'OTP Will be Again Send after 5 Minutes')
            }>
            Resend
          </Text>
        </Text>
      </View>
    </AppLayout>
  );
};

export default LoginVerification;
const styles = StyleSheet.create({
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  verificationText: {
    fontSize: fontSize.xxxxl,
    lineHeight: 30,
    color: colors.black,
  },
  otpText: {
    fontSize: fontSize.xl,
    lineHeight: fontSize.xxl,
    textAlign: 'center',
    marginTop: vs(10),
    color: colors.black,
  },
  otpTimer: {
    color: colors.black,
    fontSize: fontSize.xl,
    textAlign: 'center',
  },
  resendText: {
    fontWeight: 'bold',
    fontSize: fontSize.l,
    textAlign: 'center',
  },
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 30},
});
