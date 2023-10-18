import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import HeaderNav from '../components/Layouts/HeaderNav';
import AppLayout from '../components/Layouts/AppLayout';
import CustomButton from '../components/CustomButton';
import {fontSize, fonts} from '../constants/fonts';
import {Images} from '../constants/imagePaths';
import {ms, mvs} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from '../redux/actions/CartAction';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const handleRemoveItem = itemId => {
    dispatch(removeItem(itemId));
  };
  const subTotal =
    cart?.cart?.length > 0 &&
    cart?.cart?.reduce((a, c) => a + c?.quantity * c?.price, 0);

  // const TotalItemsInCart = cart?.cart?.reduce(
  //   (a, c) => a.quantity + c.quantity,
  //   0,
  // );
  const renderCartItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}
        key={index}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 10,
          }}>
          {/* Title */}
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                color: '#707070',
                fontSize: fontSize.l,
                lineHeight: 20,
                fontFamily: fonts.interMedium,
                textAlign: 'center',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.name}
            </Text>
          </View>
          {/* Quantity */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => dispatch(decreaseItem(item.id))}>
              <Image
                source={Images.ic_decrease}
                style={{height: 20, width: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#818181',
                backgroundColor: colors.white,
                borderRadius: 3,
                marginHorizontal: 15,
                flex: 2,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#707070',
                }}>
                {item.quantity}
              </Text>
            </View>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => dispatch(increaseItem(item.id))}>
              <Image
                source={Images.ic_increase}
                style={{height: 20, width: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                color: '#707070',
                fontSize: fontSize.l,
                fontFamily: fonts.interMedium,
              }}>
              ${item.price * item.quantity}
            </Text>
          </View>
        </View>
        {/* Close button */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
          }}
          onPress={() => handleRemoveItem(item.id)}>
          <Image
            source={Images.ic_close}
            style={{height: 15, width: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <AppLayout>
      <HeaderNav title={'Cart'} />
      {cart?.cart?.length > 0 ? (
        <View style={styles.cartContainer}>
          <Text style={styles.mainHeading}>Select</Text>
          <View style={styles.btnContainer}>
            <CustomButton
              title={'Take Away'}
              customContainerStyle={{flex: 1}}
              customTextStyle={styles.customBtnText}
            />
            <CustomButton
              title={'Dine In'}
              isPrimary={false}
              customContainerStyle={{flex: 1}}
              customTextStyle={styles.customBtnText}
            />
          </View>
          <View style={styles.itemContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                paddingRight: 10,
              }}>
              <Text style={styles.tblText}>Items</Text>
              <Text style={styles.tblText}> Qty</Text>
              <Text style={[styles.tblText, {marginRight: 15}]}>Price</Text>
            </View>
            <FlatList
              data={cart?.cart}
              renderItem={renderCartItem}
              keyExtractor={item => item.key}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 10,
                gap: 8,
              }}>
              <Text
                style={{
                  fontSize: fontSize.l,
                  color: '#707070',
                  fontFamily: fonts.interMedium,
                }}>
                Total Items
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#707070',
                  backgroundColor: `${colors.primaryBtn}10`,
                  borderRadius: 3,
                  height: 23,
                  width: 55,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#707070',
                  }}>
                  {cart?.cart?.length}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, gap: 10, marginTop: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: fontSize.m,
                  color: '#595454',
                  lineHeight: fontSize.l,
                  fontFamily: fonts.interMedium,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: fontSize.m,
                  color: '#595454',
                  lineHeight: fontSize.l,
                  fontFamily: fonts.interMedium,
                }}>
                ${subTotal}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: fontSize.m,
                  color: '#595454',
                  lineHeight: fontSize.l,
                  fontFamily: fonts.interMedium,
                }}>
                Service Fee
              </Text>
              <Text
                style={{
                  fontSize: fontSize.m,
                  color: '#595454',
                  lineHeight: fontSize.l,
                  fontFamily: fonts.interMedium,
                }}>
                $1.99
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: fontSize.xxl,
                  color: '#595454',
                  lineHeight: fontSize.xxxl,
                  fontFamily: fonts.interMedium,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: fontSize.xxl,
                  color: '#595454',
                  lineHeight: fontSize.xxxl,
                  fontFamily: fonts.interMedium,
                }}>
                ${subTotal + 1.99}
              </Text>
            </View>
            <CustomButton
              onPress={() =>
                navigation.navigate('Payment', {CartTotal: subTotal + 1.99})
              }
              title={'Proceed to Pay'}
              customContainerStyle={{marginTop: 20, marginHorizontal: 10}}
              customTextStyle={{
                fontFamily: fonts.interMedium,
              }}
            />
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Image
            source={Images.ic_basket}
            style={{height: mvs(150), width: ms(150), resizeMode: 'contain'}}
          />
          <Text
            style={{
              color: colors.gray,
              fontSize: fontSize.xl,
              fontFamily: fonts.interMedium,
            }}>
            Your Cart Is Empty
          </Text>
          <CustomButton
            onPress={() => navigation.navigate('Home')}
            title={'Continue Shopping'}
            customContainerStyle={{
              paddingHorizontal: 10,
              marginTop: 20,
              height: 60,
            }}
            customTextStyle={{alignItems: 'center'}}
          />
        </View>
      )}
    </AppLayout>
  );
};

export default Cart;
const styles = StyleSheet.create({
  cartContainer: {flex: 1, paddingHorizontal: 5, marginTop: mvs(20)},
  mainHeading: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.xxl,
    color: colors.cartText,
    lineHeight: fontSize.xxxl,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 25,
    marginTop: mvs(15),
  },
  customBtnText: {
    fontSize: fontSize.l,
    fontFamily: fonts.interMedium,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: `${colors.primaryBtn}10`,
    borderRadius: 10,
    padding: 10,
    marginTop: mvs(20),
  },
  tblText: {
    fontFamily: fonts.interMedium,

    flex: 1,
    fontSize: fontSize.l,
    lineHeight: fontSize.xl,
    color: colors.gray,
    textAlign: 'center',
  },
});
