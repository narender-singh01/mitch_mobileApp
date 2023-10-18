import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {Images} from '../constants/imagePaths';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import AppLayout from '../components/Layouts/AppLayout';
import HomeHeader from '../components/Layouts/HomeHeader';
import {mvs} from 'react-native-size-matters';
import ProductDetailModal from '../components/Modals/ProductDetailModal';
import { addToProductDetail } from '../redux/actions/CartAction';
import { useDispatch } from 'react-redux';

const Home = ({navigation}) => {
  const [showItemDetailModal, setshowItemDetailModal] = useState(false);
  const [productDetail, setProductDetail] = useState('');
  const dispatch=useDispatch()
  const categoryItem = [
    {
      id: 1,
      name: 'Fish',
      image: Images.ic_topCategory1,
      price: 10,
    },
    {
      id: 2,
      name: 'Chicken',
      image: Images.ic_topCategory2,
      price: 10,
    },
    {
      id: 3,
      name: 'Beef',
      image: Images.ic_topCategory3,
      price: 30,
    },
    {
      id: 4,
      name: 'Chicken Burrito',
      image: Images.ic_topCategory1,
      price: 19,
    },
    {
      id: 5,
      name: 'Beef',
      image: Images.ic_topCategory3,
      price: 22,
    },
    {
      id: 6,
      name: 'Chicken Burrito',
      image: Images.ic_topCategory1,
      price: 17,
    },
  ];
  const PopularDishes = [
    {
      id: 1,
      name: 'Salmon',
      image: Images.ic_popularDishes1,
      rating: 4.8,
      ratingCount: 233,
      price: 20,
    },
    {
      id: 2,
      name: 'Chicken Burrito Bowl',
      image: Images.ic_popularDishes1,
      rating: 4.3,
      ratingCount: 233,
      price: 50,
    },
    {
      id: 3,
      name: 'Salmon',
      image: Images.ic_popularDishes1,
      rating: 4.8,
      ratingCount: 233,
      price: 10,
    },
    {
      id: 4,
      name: 'Chicken Burrito Bowl',
      image: Images.ic_popularDishes1,
      rating: 4.3,
      ratingCount: 233,
      price: 78,
    },
  ];
  const bestSeller = [
    {
      id: 1,
      name: 'Fish',
      image: Images.ic_bestSeller1,
      rating: 4.8,
      price: 10,
    },
    {
      id: 2,
      name: 'Chicken',
      image: Images.ic_bestSeller2,
      rating: 4.8,
      price: 15,
    },
    {
      id: 3,
      name: 'Beef',
      image: Images.ic_bestSeller3,
      rating: 4.8,
      price: 45,
    },
    {
      id: 4,
      name: 'Chicken Burrito Bowl',
      image: Images.ic_bestSeller4,
      rating: 4.8,
      price: 30,
    },
    {
      id: 5,
      name: 'Lean Grilled Steak',
      image: Images.ic_bestSeller5,
      rating: 4.8,
      price: 50,
    },
    {
      id: 6,
      name: 'Pesto Chicken Pasta',
      image: Images.ic_bestSeller6,
      rating: 4.8,
      price: 20,
    },
  ];
  const renderTopCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Category")}
        key={index}
        style={styles.topCatContentContainer}>
        <Image source={item.image} style={styles.topCatImage} />
        <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderPopularDishes = ({item, index}) => {
    return (
      <View key={index} style={{marginRight: 10}}>
        <View style={styles.popularDisContentContainer}>
          <Image
            source={item.image}
            style={{height: 250, width: 200, resizeMode: 'contain'}}
          />
        </View>
        <Text
          style={[
            styles.itemTitle,
            {textAlign: 'left', fontFamily: fonts.poppinsMedium},
          ]}
          numberOfLines={1}
          ellipsizeMode="middle">
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={Images.ic_ratingStar}
            style={{
              height: 15,
              width: 15,
              resizeMode: 'contain',
              marginBottom: 5,
            }}
          />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.ratingCount}>({item.ratingCount} ratings)</Text>
        </View>
      </View>
    );
  };
  const handleViewDetail = item => {
    setProductDetail(item);
    setshowItemDetailModal(!showItemDetailModal);
    dispatch(addToProductDetail(item))
  };
  const renderBestSeller = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleViewDetail(item)}
        key={index}
        style={styles.productContainer}>
        <View style={[styles.bestSellerContentContainer]}>
          <ImageBackground source={item.image} style={styles.bestSellerImage}>
            <View style={styles.bestSellerImgView}>
              <Image
                source={Images.ic_ratingStar}
                style={{height: 10, width: 10, resizeMode: 'contain'}}
              />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ProductDetailModal
        setShow={setshowItemDetailModal}
        show={showItemDetailModal}
        item={productDetail}
      />
      <AppLayout>
        <HomeHeader title={'Welcome John'} isbell={true} />
        <SearchBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          bounces={false}>
          <View style={{marginTop: 15}}>
            <View style={styles.containerHeader}>
              <Text style={styles.headerTitle}>Top categories</Text>
              <View style={styles.showAllContainer}>
                <Text style={styles.showAllText}>Show all</Text>
                <Image source={Images.ic_showAllRight} />
              </View>
            </View>
            <FlatList
              data={categoryItem}
              renderItem={renderTopCategory}
              keyExtractor={item => item.id}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </View>
          <View>
            <View style={styles.containerHeader}>
              <Text style={styles.headerTitle}>Popular Dishes</Text>
            </View>
            <FlatList
              data={PopularDishes}
              renderItem={renderPopularDishes}
              key={item => item.id}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </View>
          <View>
            <View style={styles.containerHeader}>
              <Text style={[styles.headerTitle, {marginBottom: 10}]}>
                Best Seller
              </Text>
            </View>
            <FlatList
              data={bestSeller}
              numColumns={3}
              renderItem={renderBestSeller}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </AppLayout>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: fontSize.xxxl,
  },
  itemTitle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: fontSize.l,
    color: colors.black,
    textAlign: 'center',
    marginTop: 8,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  showAllText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: fontSize.xl,
  },
  rating: {
    color: colors.black,
    fontSize: fontSize.m,
    marginLeft: 3,
    fontFamily: fonts.poppinsRegular,
  },
  ratingCount: {
    fontSize: fontSize.m,
    color: colors.ratingText,
    fontFamily: fonts.poppinsRegular,
    textAlign: 'center',
  },
  showAllContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},

  //TopCategory Section
  topCatContentContainer: {
    alignItems: 'center',
    marginRight: 5,
    marginTop: 10,
    width: 95,
  },
  topCatImage: {height: 88, width: 88, resizeMode: 'contain'},

  //Populate Dishes Section
  popularDisContentContainer: {marginTop: 10, gap: 5},

  // Best Seller Section
  bestSellerContentContainer: {
    borderRadius: 8,
  },
  bestSellerImage: {height: mvs(90), width: mvs(100), resizeMode: 'cover'},

  bestSellerImgView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 3,
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginEnd: 5,
    marginTop: 5,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
});
