import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import HeaderNav from '../components/Layouts/HeaderNav';
import CustomButton from '../components/CustomButton';
import {fontSize, fonts} from '../constants/fonts';
import PhoneInput from '../components/PhoneInput';
import AppLayout from '../components/Layouts/AppLayout';
import {useForm, Controller} from 'react-hook-form';

const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onHandleOtp = data => {
    if (data) {
      Alert.alert('OTP', '123456');
      navigation.navigate('LoginVerification');
    }
  };
  return (
    <AppLayout>
      <HeaderNav title={'Login'} />
      <View stye={styles.InputContainer}>
        <Controller
          control={control}
          render={({field}) => (
            <PhoneInput
              placeholder={'Enter Phone No.'}
              onChangeText={value => field.onChange(value)}
              value={field.value}
              customContainerStyle={{marginTop: 60}}
            />
          )}
          name="phone"
          rules={{
            required: {value: true, message: 'Phone is required'},
            minLength: {
              value: 10,
              message: 'Please Enter Valid Number',
            },
          }}
          defaultValue=""
        />
        {errors.phone && (
          <Text style={styles.errorText}>{errors.phone.message}</Text>
        )}
        <Text style={styles.otpText}> A code will be sent to your number.</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          title={'Get OTP'}
          isPrimary={true}
          onPress={handleSubmit(onHandleOtp)}
        />
      </View>
    </AppLayout>
  );
};

export default Login;
const styles = StyleSheet.create({
  otpText: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
    textAlign: 'center',
    color: colors.black,
    margin: 20,
  },
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 50},
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});
