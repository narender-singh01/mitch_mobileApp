import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {ms, mvs, s} from 'react-native-size-matters';
import {Images} from '../constants/imagePaths';
import {useEffect} from 'react';
import {GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
export default function SocialMediaBtnComp(props) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '398049999085-g7eb1fp850kml3e5q9s114fr4ksnpthc.apps.googleusercontent.com',
    });
  });

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      props.setUserData({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const btnArr = [
    {name: 'Facebook', img: Images.ic_facebook, onPress: () => {}},
    {name: 'Google', img: Images.ic_google, onPress: () => {signIn()}},
    {name: 'Apple', img: Images.ic_apple, onPress: () => {}},
    {name: 'Instagram', img: Images.ic_instagram, onPress: () => {}},
    {name: 'LinkedIn', img: Images.ic_linkedin, onPress: () => {}},
    {name: 'GitHub', img: Images.ic_github, onPress: () => {}},
  ];

  return (
    <View style={[styles.mainContainer, props?.buttonStyle]}>
      {btnArr.map((btn, index) => {
        if (props.requiredLoginBtns.includes(btn.name.toLowerCase())) {
          if (btn.name === 'Apple' && Platform.OS !== 'ios') {
            return null;
          }
          return (
            <TouchableOpacity
              style={styles.socialMediaBtnContainer}
              key={index}
              onPress={btn.onPress}
              activeOpacity={props?.activeOpacity}
              disabled={props?.disabled}
              ref={props?.ref}>
              <Image source={btn.img} style={[styles.img, props?.imageStyle]} />
            </TouchableOpacity>
          );
        }
        return null;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: mvs(20),
  },

  img: {height: mvs(56), width: ms(56), resizeMode: 'contain'},
  socialMediaBtnContainer: {
    alignItems: 'center',
    marginHorizontal: ms(15),
  },
});
