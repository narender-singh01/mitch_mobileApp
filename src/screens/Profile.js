import React from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import HeaderNav from '../components/Layouts/HeaderNav';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../constants/colors';
import {Images} from '../constants/imagePaths';
import {fontSize, fonts} from '../constants/fonts';

const Profile = () => {
  const actionArr = [
    {
      icon: Images.ic_blue_user,
      name: 'My Account',
      desc: 'Make changes to your account',
    },
    {
      icon: Images.ic_blue_user,
      name: 'Your order history',
      desc: 'Orders...',
    },
    {
      icon: Images.ic_shield,
      name: 'Your Rating',
      desc: 'ratings...',
    },
    {
      icon: Images.ic_shield,
      name: 'Two-Factor Authentication',
      desc: 'Further secure your account for safety',
    },
    {
      icon: Images.ic_logout,
      name: 'Log out',
      desc: 'Further secure your account for safety',
    },
  ];
  const moreActionsArr = [
    {
      icon: Images.ic_blue_bell,
      name: 'Help & Support',
    },
    {
      icon: Images.ic_blue_heart,
      name: 'About App',
    },
  ];

  return (
    <AppLayout>
      <HeaderNav title={'Profile'} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
          marginTop: 20,
        }}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.userDetailContainer, styles.shadow]}>
          <View style={styles.userImgView}>
            <View style={[styles.userImgContainer]}>
              <Image style={styles.userImg} source={Images.ic_dummy_user} />
            </View>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userMainTxt}>John</Text>
            <Text style={styles.userSubTxt}>John@example.com</Text>
          </View>
          <View style={styles.editBtnContainer}>
            <TouchableOpacity>
              <Image source={Images.ic_pencil} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.actionContainer, styles.shadow]}>
          {actionArr.map((action, index) => (
            <TouchableOpacity
              style={[
                styles.actionDetailContainer,
                {marginTop: index != 0 ? 26 : 0},
              ]}
              key={index}>
              <View style={styles.actionImgView}>
                <View style={[styles.actionImgContainer]}>
                  <Image style={styles.actionImg} source={action.icon} />
                </View>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.actionMainTxt}>{action.name}</Text>
                <Text style={styles.actionSubTxt}>{action.desc}</Text>
              </View>
              <View style={styles.editBtnContainer}>
                <TouchableOpacity>
                  <Image
                    source={Images.ic_right_chevron}
                    style={styles.rightIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.moreTxt}>More</Text>
        <View style={[styles.actionContainer, styles.shadow, {marginTop: 0}]}>
          {moreActionsArr.map((action, index) => (
            <TouchableOpacity
              style={[
                styles.actionDetailContainer,
                {marginTop: index != 0 ? 26 : 0},
              ]}
              key={index}>
              <View style={styles.actionImgView}>
                <View style={[styles.actionImgContainer]}>
                  <Image style={styles.actionImg} source={action.icon} />
                </View>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.actionMainTxt}>{action.name}</Text>
              </View>
              <View style={styles.editBtnContainer}>
                <TouchableOpacity>
                  <Image
                    source={Images.ic_right_chevron}
                    style={styles.rightIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userDetailContainer: {
    backgroundColor: colors.primaryBtn,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  userImgContainer: {
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    overflow: 'hidden',
  },
  userImgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {height: 40, width: 40, resizeMode: 'contain'},
  userDetails: {
    flex: 4,

    justifyContent: 'center',
    marginLeft: 10,
  },
  userMainTxt: {
    fontFamily: fonts.poppinsBold,
    fontSize: fontSize.m,
    color: colors.white,
  },
  userSubTxt: {
    fontFamily: fonts.poppinsLight,
    fontSize: fontSize.s,
    color: colors.white,
  },
  editBtnContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {height: 25, width: 25, resizeMode: 'contain'},

  shadow: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  actionContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 5,
  },

  actionDetailContainer: {
    borderRadius: 5,

    flexDirection: 'row',
  },
  actionImgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionImgContainer: {
    backgroundColor: `${colors.primaryBtn}35`,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    overflow: 'hidden',
  },
  actionImg: {height: 20, width: 20, resizeMode: 'contain'},
  actionDetails: {
    flex: 4,

    justifyContent: 'center',
    marginLeft: 10,
  },
  actionMainTxt: {
    fontFamily: fonts.poppinsBold,
    fontSize: fontSize.m,
    color: colors.darkBlue,
  },
  actionSubTxt: {
    fontFamily: fonts.poppinsLight,
    fontSize: fontSize.s,
    color: colors.lightgrey,
  },
  rightIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  moreTxt: {
    fontSize: fontSize.l,
    fontFamily: fonts.poppinsMedium,
    textAlign: 'left',
    marginVertical: 20,
  },
});
