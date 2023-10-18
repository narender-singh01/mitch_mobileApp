import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {colors} from '../constants/colors';
import {Images} from '../constants/imagePaths';
import {fontSize, fonts} from '../constants/fonts';
import HeaderNav from '../components/Layouts/HeaderNav';
import AppLayout from '../components/Layouts/AppLayout';
import {ms, mvs} from 'react-native-size-matters';
import ProductDetailModal from '../components/Modals/ProductDetailModal';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, addToProductDetail} from '../redux/actions/CartAction';
import {addToFavorites} from '../redux/actions/FavoritesAction';

const Category = () => {
  const [showItemDetailModal, setshowItemDetailModal] = useState(false);
  const [productDetail, setProductDetail] = useState('');
  const dispatch = useDispatch();
const favorites=useSelector((state)=>state.favorites)
console.log('favorites', favorites.isFavorite)

  const topFishCategory = [
    {
      id: 1,
      name: 'Fish',
      image: Images.ic_topFishCat1,
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
      name: 'Fish',
      image: Images.ic_topFishCat3,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 4,
      name: 'Fish',
      image: Images.ic_topFishCat4,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Fish',
      image: Images.ic_topFishCat3,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 6,
      name: 'Fish',
      image: Images.ic_topFishCat4,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 7,
      name: 'Fish',
      image: Images.ic_topFishCat3,
      price: 10.0,
      rating: 4.0,
    },
    {
      id: 8,
      name: 'Fish',
      image: Images.ic_topFishCat4,
      price: 10.0,
      rating: 4.0,
    },
  ];
  const handleViewDetail = item => {
    setProductDetail(item);
    setshowItemDetailModal(!showItemDetailModal);
    dispatch(addToProductDetail(item))

  };
  const renderTopFishCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleViewDetail(item)}
        key={index}
        style={styles.mainContainer}>
        <View
          style={[
            styles.categoryItemCard
           
          ]}>
          <ImageBackground source={item.image} style={styles.catImg}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                style={styles.crossIconContainer}
                onPress={() => dispatch(addToFavorites(item))}>
                <Image source={Images.ic_heart} style={[styles.crossIcon]} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.catItemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
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
  return (
    <AppLayout>
      <ProductDetailModal
        setShow={setshowItemDetailModal}
        show={showItemDetailModal}
        item={productDetail}
      />
      <HeaderNav title={'Top fish dish'} isbell={true} isBottomLine={true} />
      <SearchBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={topFishCategory}
        numColumns={2}
        renderItem={renderTopFishCategory}
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

export default Category;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal:5
  },
  categoryItemCard: {
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
  catImg: {height: mvs(115), width: mvs(160), resizeMode: 'contain'},
  crossIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 100,
    marginRight: 20,
    marginTop: 15,
  },
  crossIcon: {
    height: mvs(16),
    width: ms(18),
    margin: mvs(4),
  },
  catItemContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    gap: 4,
  },
  itemTitle: {
    fontFamily: fonts.poppinsMedium,
    color: colors.darkGray,
    fontSize: fontSize.l,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
});
