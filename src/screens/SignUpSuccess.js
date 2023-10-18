import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../constants/imagePaths';
import {ms, s} from 'react-native-size-matters';
import AppLayout from '../components/Layouts/AppLayout';
const SignUpSuccess = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Preferences');
    }, 1000);
  });
  return (
    <AppLayout>
      <Image
        source={Images.ic_SignUpSuccess}
        style={styles.congratulationImg}
      />
    </AppLayout>
  );
};

export default SignUpSuccess;
const styles = StyleSheet.create({
  congratulationImg: {
    height: ms(398),
    width: s(332),
    resizeMode: 'contain',
    top: 97,
  },
});
