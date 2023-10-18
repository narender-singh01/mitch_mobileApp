import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text
} from 'react-native';
import React from 'react';
import HeaderNav from '../components/Layouts/HeaderNav';
import {colors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {Images} from '../constants/imagePaths';
import {fontSize, fonts} from '../constants/fonts';
import AppLayout from '../components/Layouts/AppLayout';
import { ms, mvs } from 'react-native-size-matters';

const Preferences = ({navigation}) => {
  const foodArr = [
    {
      id: 1,
      name: 'Beef',
      image: Images.ic_food1,
    },
    {
      id: 2,
      name: 'Tandoori Lamb ',
      image: Images.ic_food2,
    },
    {
      id: 3,
      name: 'Fish',
      image: Images.ic_food3,
    },
    {
      id: 4,
      name: 'Chicken',
      image: Images.ic_food4,
    },
    {
      id: 5,
      name: 'Lean Grilled Steak',
      image: Images.ic_food5,
    },
    {
      id: 6,
      name: 'Pesto Chicken Pasta',
      image: Images.ic_food6,
    },
    {
      id: 7,
      name: 'Chicken Burrito',
      image: Images.ic_food7,
    },
    {
      id: 8,
      name: 'Chinese Peking Duck',
      image: Images.ic_food8,
    },
    {
      id: 9,
      name: 'London Broil Steak',
      image: Images.ic_food9,
    },
  ];

  const renderFoodItem = ({item, index}) => {
    return (
      <View key={index} style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <AppLayout containerStyle={{paddingBottom: 150}}>
      <HeaderNav title={'Select Your Preference'} />
      <FlatList
        data={foodArr}
        numColumns={3}
        renderItem={renderFoodItem}
        contentContainerStyle={{flex: 1}}
        keyExtractor={item => item.id}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          title={'Next'}
          customContainerStyle={styles.nextBtn}
          customTextStyle={{
            fontSize: fontSize.l,
            fontFamily: fonts.poppinsMedium,
          }}
          onPress={() => navigation.navigate('TabBar')}
        />
        <CustomButton
          title={'Skip'}
          isPrimary={false}
          customContainerStyle={styles.skipBtn}
          customTextStyle={{
            color: colors.primaryBtn,
            fontSize: fontSize.l,
            fontFamily: fonts.poppinsMedium,
          }}
          onPress={() => navigation.navigate('TabBar')}
        />
      </View>
    </AppLayout>
  );
};

export default Preferences;
const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.borderColor,
    marginTop: 25,
    margin:10,
  },
  itemImage: {height: mvs(85), width: ms(100), resizeMode: 'cover'},
  itemTitle: {
    fontSize: fontSize.m,
    textAlign: 'center',
    color: colors.btnTxt,
    fontFamily: fonts.interRegular,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    padding: 12,
    gap: 10,
  },
  nextBtn: {flex: 1, borderRadius: 12},
  skipBtn: {flex: 1, borderRadius: 12},
});
