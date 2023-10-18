import {View, StyleSheet, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import HeaderNav from '../components/Layouts/HeaderNav';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import CustomButton from '../components/CustomButton';
import {vs} from 'react-native-size-matters';
import OtpInput from '../components/OtpInput';
import AppLayout from '../components/Layouts/AppLayout';
import {textSettings} from '../constants/globalConstants';
const Verification = ({navigation}) => {
  const [input, setInput] = useState();
  const handleSubmit = () => {
    if (input === '123456') {
      navigation.navigate('SignUpForm');
    } else {
      Alert.alert('SignUp', 'Incorrect OTP');
    }
  };
  return (
    <AppLayout
      containerStyle={{
        paddingBottom: 15,
      }}>
      <HeaderNav title={'Sign Up'} />
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
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: fontSize.l,
            fontFamily: fonts.interMedium,
            color:colors.black
          }}>
          I didn’t receive the code!
          <Text
            style={styles.resendText}
            onPress={() =>
              Alert.alert('SignUp', 'OTP Will be Again Send after 5 Minutes')
            }>
            Resend
          </Text>
        </Text>
      </View>
    </AppLayout>
  );
};

export default Verification;
const styles = StyleSheet.create({
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  verificationText: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.xxxxl,
    lineHeight: 30,
    color: colors.black,
  },
  otpText: {
    fontFamily: fonts.interLight,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xxl,
    textAlign: 'center',
    marginTop: vs(10),
    color: colors.black,
  },
  otpTimer: {
    fontFamily: fonts.interMedium,
    color: colors.black,
    fontSize: fontSize.xl,
    textAlign: 'center',
  },
  resendText: {
    fontFamily: fonts.interMedium,
    fontWeight: 'bold',
    fontSize: fontSize.l,
    textAlign: 'center',
    color: colors.black,
  },
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 30},
});
