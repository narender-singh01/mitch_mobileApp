import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../constants/imagePaths';
import {vs, mvs} from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import {fontSize, fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import AppLayout from '../components/Layouts/AppLayout';

const OnBoarding = ({navigation}) => {
  return (
    <AppLayout>
      <View style={styles.containerContent}>
        <View>
          <Image source={Images.ic_onboarding} style={styles.onBoardImgStyle} />
        </View>
        <Text style={styles.mainHeading}>Lorem ipsum dolor consectur</Text>
        <Text style={styles.headingText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit purus sit amet
          luctus venenatis, lectus magna fringilla urna, porttitor.
        </Text>
      </View>
      <Image
        source={Images.ic_progressBar}
        style={{alignSelf: 'center', marginTop: 30}}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          title={'SignUp'}
          isPrimary={true}
          onPress={() => navigation.navigate('SignUp')}
        />
        <CustomButton
          title={'Login'}
          isPrimary={false}
          customContainerStyle={{marginTop: 20}}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          title={'Skip for Now'}
          isPrimary={false}
          customContainerStyle={{marginTop: 20, borderWidth: 0}}
          customTextStyle={{
            textDecorationLine: 'underline',
            fontFamily: fonts.interLight,
          }}
          onPress={() => navigation.navigate('TabBar')}
        />
      </View>
    </AppLayout>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  containerContent: {justifyContent: 'center', alignItems: 'center', flex: 1.5},
  onBoardImgStyle: {
    height: vs(300),
    resizeMode: 'contain',
  },
  mainHeading: {
    fontSize: fontSize.xxxl,
    textAlign: 'center',
    lineHeight: fontSize.xxxl,
    fontFamily: fonts.interMedium,
    color: colors.black,
  },
  headingText: {
    fontFamily: fonts.interLight,
    fontSize: fontSize.l,
    textAlign: 'center',
    lineHeight: fontSize.xxl,
    paddingHorizontal: 10,
    marginTop: mvs(15),
    color: colors.black,
  },
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 15},
});
