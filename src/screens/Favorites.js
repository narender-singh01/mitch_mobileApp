import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {Images} from '../constants/imagePaths';
import {fontSize, fonts} from '../constants/fonts';
import HeaderNav from '../components/Layouts/HeaderNav';
import AppLayout from '../components/Layouts/AppLayout';
import {ms, mvs} from 'react-native-size-matters';
import ProductDetailModal from '../components/Modals/ProductDetailModal';
import {addToCart, addToProductDetail} from '../redux/actions/CartAction';
import {useDispatch} from 'react-redux';

const Favorites = () => {
  const [showItemDetailModal, setshowItemDetailModal] = useState(false);
  const [productDetail, setProductDetail] = useState('');
  const dispatch = useDispatch();

  const favoriteItems = [
    {
      id: 1,
      name: 'Beef',
      image: Images.ic_topCategory3,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 2,
      name: 'Fish',
      image: Images.ic_topFishCat2,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Pesto Chicken Pasta',
      image: Images.ic_favorites1,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 4,
      name: 'Chicken Burrito Bowl',
      image: Images.ic_favorites2,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Pesto Chicken Pasta',
      image: Images.ic_favorites1,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 6,
      name: 'Chicken Burrito Bowl',
      image: Images.ic_favorites2,
      price: 10.0,
      rating: 4.0,
    },
  ];
  const renderFavorites = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleViewDetail(item)}
        key={index}
        style={styles.mainContainer}>
        <View style={[styles.favoriteItemCard]}>
          <ImageBackground source={item.image} style={styles.favImg}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity style={styles.crossIconContainer}>
                <Image source={Images.ic_cross} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.favItemContentContainer}>
            <Text
              style={styles.itemTitle}
              numberOfLines={2}
              ellipsizeMode="middle">
              {item.name}
            </Text>
            <Image
              source={Images.ic_goldenStars}
              style={{height: mvs(12), width: mvs(62), resizeMode: 'cover'}}
            />
            <View style={styles.priceContainer}>
              <Text style={[styles.itemTitle, {fontSize: fontSize.m}]}>
                ${item.price}.00
              </Text>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => dispatch(addToCart(item))}>
                <Text
                  style={[
                    styles.itemTitle,
                    {
                      fontSize: fontSize.s,
                      paddingHorizontal: 15,
                      fontFamily: fonts.poppinsMedium,
                    },
                  ]}>
                  ADD
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const handleViewDetail = item => {
    setProductDetail(item);
    setshowItemDetailModal(!showItemDetailModal);

    dispatch(addToProductDetail(item));
  };
  return (
    <AppLayout>
      <ProductDetailModal
        setShow={setshowItemDetailModal}
        show={showItemDetailModal}
        item={productDetail}
      />
      <HeaderNav title={'Favorites'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favoriteItems}
        numColumns={2}
        renderItem={renderFavorites}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          justifyContent: 'center',
          paddingBottom: 20,
          marginBottom: 15,
        }}
      />
    </AppLayout>
  );
};

export default Favorites;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 5,
  },
  favoriteItemCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginTop: 15,
  },
  productContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  favImg: {height: mvs(115), width: mvs(160), resizeMode: 'contain'},
  crossIconContainer: {
    borderRadius: 100,
    marginTop: 10,
    marginRight: 20,
    borderWidth: 1,
    borderColor: colors.white,
  },
  crossIcon: {
    height: mvs(10),
    width: ms(10),
    margin: 5,
    resizeMode: 'contain',
  },
  favItemContentContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    gap: 4,
  },
  itemTitle: {
    fontFamily: fonts.poppinsMedium,
    color: colors.darkGray,
    fontSize: fontSize.l,
    lineHeight: fontSize.xxxxl,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
});
