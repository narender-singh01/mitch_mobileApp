import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Images} from '../../constants/imagePaths';
import {colors} from '../../constants/colors';
import {fontSize, fonts} from '../../constants/fonts';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import {ScreenDimensions} from '../../constants/screenDimensions';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decreaseProductDetail,
  increaseProductDetail,
} from '../../redux/actions/CartAction';
import {
  DECREASE_PRODUCTDETAIL,
  INCREASE_PRODUCTDETAIL,
} from '../../redux/actions/ActionTypes';
import {mvs} from 'react-native-size-matters';

const ProductDetailModal = ({show, setShow, item}) => {
  const sliderWidth = Dimensions.get('screen').width;
  const [activeSlide, setActiveSlide] = useState(0);
  const cart = useSelector(state => state.cart);
  const carouselRef = useRef(null);

  const dispatch = useDispatch();
  const cartItem = () => {
    dispatch(addToCart(item));
  };
  const handleCounter = (data, type) => {
    if (type === INCREASE_PRODUCTDETAIL) {
      dispatch(increaseProductDetail(data));
    }
    if (type === DECREASE_PRODUCTDETAIL) {
      dispatch(decreaseProductDetail(data));
    }
  };
  const ProductDetailImg = [
    {
      id: 1,
      image: item.image,
    },
    {
      id: 2,
      image: item.image,
    },
    {
      id: 3,
      image: item.image,
    },
    {
      id: 4,
      image: item.image,
    },
  ];

  const renderProductDetailImg = ({item, index}) => {
    return (
      <ImageBackground source={item.image} key={index} style={styles.itemImg}>
        <TouchableOpacity
          style={{backgroundColor: 'white', padding: 20}}
          onPress={() => {
            carouselRef.current.snapToPrev();
          }}>
          <Image
            source={Images.ic_left_arrow}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'white', padding: 20}}
          onPress={() => {
            carouselRef.current.snapToNext();
          }}>
          <Image
            source={Images.ic_right_arrow}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    <Modal
      isVisible={show}
      hasBackdrop={true}
      onSwipeComplete={() => setShow(false)}
      swipeDirection={'down'}
      style={{
        margin: 0,
        alignItems: undefined,
        justifyContent: undefined,
      }}>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          marginTop: 40,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 6,
            backgroundColor: colors.gray,
            borderRadius: 5,
            alignSelf: 'center',
          }}
          onPress={() => setShow(false)}
        />
        <View
          style={{
            marginTop: 30,
          }}>
          <Carousel
            data={ProductDetailImg}
            renderItem={renderProductDetailImg}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            layout={'default'}
            ref={carouselRef}
            loop={true}
            onSnapToItem={index => setActiveSlide(index)}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.ItemTitle}>
            {cart.productDetails !== null && cart.productDetail?.name}
          </Text>
          <View style={styles.calContainer}>
            <View style={styles.calSection}>
              <Text style={styles.calSectionQuantity}>143</Text>
              <Text style={styles.calSectionTitle}>calorie</Text>
            </View>
            <View style={styles.calSection}>
              <Text style={styles.calSectionQuantity}>6.5</Text>
              <Text style={styles.calSectionTitle}>proteins</Text>
            </View>
            <View style={styles.calSection}>
              <Text style={styles.calSectionQuantity}>0.5</Text>
              <Text style={styles.calSectionTitle}>fat</Text>
            </View>
            <View style={styles.calSection}>
              <Text style={styles.calSectionQuantity}>29.9</Text>
              <Text style={styles.calSectionTitle}>carbs</Text>
            </View>
          </View>
          <Text style={styles.counterTitle}>Items</Text>
          <View style={styles.counterContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  handleCounter(cart.productDetail.id, DECREASE_PRODUCTDETAIL)
                }>
                <Image source={Images.ic_minus} style={styles.counterIcon} />
              </TouchableOpacity>
            </View>
            <Text>
              {cart.productDetail !== null && cart.productDetail.quantity}
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  handleCounter(cart.productDetail.id, INCREASE_PRODUCTDETAIL)
                }>
                <Image source={Images.ic_add} style={styles.counterIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.btnContainer]} onPress={cartItem}>
          <Text style={[styles.btnTxt]}>Add Item to cart</Text>
          <Text style={[styles.btnTxt]}>$ 10.00</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProductDetailModal;
const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    borderColor: '#FAFAFA',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
  itemImg: {
    width: ScreenDimensions.sWidth,
    resizeMode: 'contain',
    height: mvs(250),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  counterIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBtn,
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.btnBorder,
    marginTop: 50,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    paddingHorizontal: 20,
  },
  ItemTitle: {
    fontSize: fontSize.xxxxl,
    color: colors.black,
    marginTop: 15,
    fontFamily: fonts.poppinsMedium,
  },
  btnTxt: {
    color: colors.white,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl,
    marginVertical: 15,
    textAlign: 'center',
  },
  calContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
  counterTitle: {
    fontSize: fontSize.l,
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    marginTop: 8,
  },
  calSection: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  calSectionTitle: {
    fontSize: fontSize.l,
    color: colors.gray,
    fontFamily: fonts.interSemiBold,
  },
  calSectionQuantity: {
    color: colors.black,
    fontSize: fontSize.l,
    textAlign: 'center',
    fontFamily: fonts.interSemiBold,
  },
});
