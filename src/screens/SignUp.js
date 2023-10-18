import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../constants/colors';
import HeaderNav from '../components/Layouts/HeaderNav';
import CustomButton from '../components/CustomButton';
import {fontSize, fonts} from '../constants/fonts';
import PhoneInput from '../components/PhoneInput';
import AppLayout from '../components/Layouts/AppLayout';
import {useForm, Controller} from 'react-hook-form';
import SocialMediaBtnComp from '../components/SocialMediaBtnComp';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const SignUp = ({navigation}) => {
  const [userData, setUserData] = useState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onHandleOtp = data => {
    if (data) {
      Alert.alert('OTP', '123456');
      navigation.navigate('Verification');
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserData({user: null});
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (userData?.userInfo) {
      Alert.alert('GoogleSignIn', userData?.userInfo?.user?.name, [
        {
          text: 'Logout',
          onPress: () => signOut(),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  });
  return (
    <AppLayout>
      <HeaderNav title={'Sign Up'} />
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
      <SocialMediaBtnComp
        requiredLoginBtns={['google', 'facebook']}
        buttonStyle={{paddingBottom: 20}}
        userData={userData}
        setUserData={setUserData}
      />
    </AppLayout>
  );
};
export default SignUp;
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
