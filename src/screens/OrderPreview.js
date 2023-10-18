import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import HeaderNav from '../components/Layouts/HeaderNav';
import {colors} from '../constants/colors';
import {fontSize, fonts} from '../constants/fonts';
import {Images} from '../constants/imagePaths';

const OrderPreview = props => {
  const {orderDetails} = props.route.params;
  return (
    <AppLayout>
      <HeaderNav title={'Order Preview'} />
      <View style={styles.mainContainer}>
        <View style={styles.orderDetailContainer}>
          <View style={styles.orderContent}>
            <Text style={styles.titleText}>OrderId</Text>
            <Text
              style={styles.contentText}>{`[${orderDetails.orderId}]`}</Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.titleText}>Date</Text>
            <Text style={styles.contentText}>
              {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.lightBlue,
            padding: 15,
            backgroundColor: colors.white,
          }}>
          <View style={styles.addressContainer}>
            <Text style={[styles.titleText]}>Address:</Text>
            <Text
              style={[styles.titleText, {fontSize: fontSize.m}]}
              numberOfLines={2}
              ellipsizeMode="tail">
              Street, Building, Town, Country ,1123233
            </Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={[styles.titleText]}>Contact:</Text>
            <Text style={[styles.titleText, {fontSize: fontSize.m}]}>
              +880 000000
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.lightBlue,
              padding: 10,
              backgroundColor: colors.primaryBtn,
              borderTopStartRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.orderTableTitle}>Sl No.</Text>
              <Text style={styles.orderTableTitle}>Description</Text>
              <Text style={styles.orderTableTitle}>QTY</Text>
              <Text style={styles.orderTableTitle}>U. Price</Text>
              <Text style={styles.orderTableTitle}>Total</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.lightBlue,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: colors.white,
              padding: 10,
              borderBottomStartRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <Image source={Images.ic_cross} style={styles.statusIcon} />
            <Text style={[styles.orderTableTitle, {color: colors.gray}]}>
              {orderDetails.id}
            </Text>
            <Text style={[styles.orderTableTitle, {color: colors.gray}]}>
              {orderDetails.name}{' '}
            </Text>
            <Text style={[styles.orderTableTitle, {color: colors.gray}]}>
              1
            </Text>
            <Text style={[styles.orderTableTitle, {color: colors.gray}]}>
              ${orderDetails.price}
            </Text>
            <Text style={[styles.orderTableTitle, {color: colors.gray}]}>
              ${orderDetails.price}
            </Text>
          </View>
        </View>
        <View style={{gap: 15, padding: 10}}>
          <View style={styles.priceTotalContainer}>
            <Text style={[styles.contentText, {color: '#46454A'}]}>
              Sub Total :
            </Text>
            <Text style={styles.contentText}>$10.00</Text>
          </View>
          <View style={styles.priceTotalContainer}>
            <Text style={[styles.contentText, {color: '#46454A'}]}>
              Discount :
            </Text>
            <Text style={styles.contentText}>$00.00</Text>
          </View>
          <View style={[styles.priceTotalContainer, {borderBottomWidth: 0}]}>
            <Text style={[styles.contentText, {color: '#46454A'}]}>
              Other :
            </Text>
            <Text style={styles.contentText}>$00.00</Text>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSize.xl,
              lineHeight: fontSize.xxxl,
              color: colors.black,
            }}>
            Final Total :
          </Text>
          <Text style={[styles.contentText, {color: colors.black}]}>
            $10.00
          </Text>
        </View>
      </View>
    </AppLayout>
  );
};

export default OrderPreview;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    gap: 20,
  },
  orderDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  orderContent: {
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titleText: {
    fontSize: fontSize.l,
    color: colors.black,
    fontFamily: fonts.poppinsMedium,
    textAlign: 'center',
  },
  contentText: {
    fontSize: fontSize.m,
    lineHeight: fontSize.xl,
    color: colors.gray,
    fontFamily: fonts.poppinsMedium,
  },
  orderTableTitle: {
    fontSize: fontSize.m,
    lineHeight: fontSize.xl,
    color: colors.white,
  },
  statusIcon: {
    height: 8,
    width: 8,
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: 'red',
  },
  priceTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBlue,
    paddingBottom: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
