import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import HeaderNav from '../components/Layouts/HeaderNav';
import { Images } from '../constants/imagePaths';
import { colors } from '../constants/colors';
import { fontSize, fonts } from '../constants/fonts';
import CustomButton from '../components/CustomButton';

const MyOrders = ({navigation}) => {
  const orderItem = [
    {
      id: 1,
      quantity: 1,
      name: 'Salmon',
      price: '10.00',
      status: 'Canclled',
      orderId: 123456,
      image: Images.ic_popularDishes1,
    },
    {
      id: 2,
      quantity: 1,
      name: 'Fish',
      price: '10.00',
      status: 'Completed',
      orderId: 123457,
      image: Images.ic_topCategory1,
    },
    {
      id: 3,
      quantity: 2,
      name: 'Chicken Burrito',
      price: '10.00',
      status: 'Canclled',
      orderId: 123458,
      image: Images.ic_favorites2,
    },
    {
      id: 4,
      quantity: 1,
      name: 'Salmon',
      price: '10.00',
      status: 'Completed',
      orderId: 123459,
      image: Images.ic_popularDishes1,
    },
    {
      id: 5,
      quantity: 1,
      name: 'Chiken',
      price: '10.00',
      status: 'Canclled',
      orderId: 123456,
      image: Images.ic_topCategory2,
    },
    {
      id: 6,
      quantity: 1,
      name: 'Beef',
      price: '10.00',
      status: 'Completed',
      orderId: 123456,
      image: Images.ic_topCategory3,
    },
  ];
const handleOrderClick=(item)=>{
  navigation.navigate("OrderPreview",{orderDetails:item})
}
  const renderOrderItems = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={()=>handleOrderClick(item)} key={index}>
      <View
        style={[
          styles.orderContainer,
          item.id === 1
            ? { backgroundColor: `${colors.primaryBtn}10` }
            : { backgroundColor: colors.white },
        ]}
        >
        <View style={styles.orderItem}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image source={item.image} style={styles.orderImg} />
            <Text style={styles.orderPrice}>x {item.quantity}</Text>
          </View>
          <Text style={styles.orderName}>{item.name}</Text>
          <Text style={styles.orderPrice}>${item.price}</Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            title={'REORDER'}
            customContainerStyle={{ flex: 1, marginHorizontal: 15 }}
            customTextStyle={[styles.customTextStyle, { color: colors.white,
             }]}
          />
          <CustomButton
            title={'RATE ORDER'}
            isPrimary={false}
            customContainerStyle={{
              flex: 1,
              marginHorizontal: 15,
              backgroundColor: null,
            }}
            customTextStyle={styles.customTextStyle}
          />
        </View>
        <View style={styles.orderStatusContainer}>
          <View style={styles.statusView}>
            <View
              style={[
                {
                  backgroundColor:
                    item.status === 'Canclled' ? colors.red : colors.primaryBtn,
                  padding: 3,
                  borderRadius: 100,
                },
              ]}>
              <Image
                source={
                  item.status === 'Canclled' ? Images.ic_cross : Images.ic_right
                }
                style={[
                  styles.statusIcon,
                  {
                    backgroundColor:
                      item.status === 'Canclled' ? colors.red : colors.white,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.orderId,
                item.status === 'Canclled'
                  ? {
                    color: colors.red,
                  }
                  : {
                    color: colors.primaryBtn,
                  },
              ]}>
              {item.status}
            </Text>
          </View>
          <View style={styles.orderIdView}>
            <Text style={styles.orderId}>Order ID :</Text>
            <Text style={styles.orderId}>{item.orderId}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  return (
    <AppLayout>
      <HeaderNav title={'My Orders'} />
      <FlatList
        data={orderItem}
        renderItem={renderOrderItems}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </AppLayout>
  );
};

export default MyOrders;
const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 4,
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  orderImg: {
    height: 50,
    width: 57,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  orderName: {
    fontFamily: fonts.poppinsMedium,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xxl,
    color: '#707070',
  },
  orderPrice: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
    lineHeight: fontSize.xl,
    color: '#707070',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    marginTop: 15,
  },
  orderStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 5,
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  orderIdView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIcon: {
    height: 8,
    width: 8,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  orderId: {
    fontFamily:fonts.interMedium,
    fontSize: fontSize.m,
    lineHeight: fontSize.xl,
    color: '#707070',
  },
  customTextStyle: {
    marginVertical: 5,
    fontSize: fontSize.m,
    lineHeight: fontSize.l,
    color: colors.primaryBtn,
    fontFamily:fonts.interMedium
  },
});
