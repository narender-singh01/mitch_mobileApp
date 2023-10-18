import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import HeaderNav from '../components/Layouts/HeaderNav';
import {fontSize, fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import {Images} from '../constants/imagePaths';
import CustomButton from '../components/CustomButton';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import OrderSuccessModal from '../components/Modals/OrderSuccessModal';
import {useNavigation} from '@react-navigation/native';

const Payment = props => {
  const navigation = useNavigation();
  const sliderWidth = Dimensions.get('screen').width;
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);
  const {CartTotal} = props.route.params;
  const paymentCards = [
    {
      id: 1,
      image: Images.ic_card,
    },
    {
      id: 2,
      image: Images.ic_card,
    },
    {
      id: 3,
      image: Images.ic_card,
    },
  ];
  const paymentMethods = [
    {
      id: 1,
      method: 'Stripe',
      image: Images.ic_stripe,
    },
    {
      id: 2,
      method: 'PayPal',
      image: Images.ic_payPal,
    },
    {
      id: 3,
      method: 'Pay at Store',
      image: Images.ic_playStore,
    },
    {
      id: 4,
      method: 'Net Banking',
      image: Images.ic_netBanking,
    },
  ];
  const renderPaymentMethods = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View key={index} style={styles.paymentMethodContainer}>
          <Image source={item.image} style={styles.paymentMethodImg} />
          <Text style={styles.paymentMethodText}>{item.method}</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelectOption(item.method)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                backgroundColor:
                  selectedOption === item.method ? 'black' : 'white',
              }}>
              {selectedOption === item.method && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: 'white',
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderPaymentCards = ({item, index}) => {
    return (
      <View key={index} style={{alignItems: 'center'}}>
        <Image source={item.image} />
      </View>
    );
  };
  const handleSelectOption = value => {
    setSelectedOption(value);
  };

  const handlePayNow = () => {
    setShowPaymentSuccessModal(!showPaymentSuccessModal);
    setTimeout(() => {
      setShowPaymentSuccessModal(showPaymentSuccessModal);
    }, 2000);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  };

  return (
    <AppLayout>
      <HeaderNav title={'Payment'} />
      <OrderSuccessModal
        setShow={setShowPaymentSuccessModal}
        show={showPaymentSuccessModal}
      />
      <View>
        <TouchableOpacity style={styles.addCardContainer}>
          <Image
            source={Images.ic_add}
            style={{height: 25, width: 30, resizeMode: 'contain'}}
          />
          <Text
            style={{
              fontFamily: fonts.interMedium,

              fontSize: fontSize.m,
              lineHeight: fontSize.l,
              color: colors.black,
            }}>
            Add New Card
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Carousel
            data={paymentCards}
            renderItem={renderPaymentCards}
            sliderWidth={sliderWidth}
            itemWidth={300}
            layout={'default'}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={paymentCards.length}
            activeDotIndex={activeSlide}
            containerStyle={{paddingVertical: 10}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: -5,
              backgroundColor: '#979797',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <Text style={styles.paymentHeading}>Other Payment Options</Text>

        <FlatList
          data={paymentMethods}
          renderItem={renderPaymentMethods}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
            marginTop: 15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontFamily: fonts.interMedium,
              color: '#424347',
              fontSize: fontSize.xl,
              lineHeight: fontSize.xxl,
            }}>
            Summary
          </Text>
          <Text
            style={{
              fontFamily: fonts.interMedium,

              color: '#424347',
              fontSize: fontSize.xl,
              lineHeight: fontSize.xxl,
            }}>
            $ {CartTotal}
          </Text>
        </View>
        <CustomButton
          title={'Pay Now'}
          onPress={handlePayNow}
          customContainerStyle={{marginTop: 20, marginHorizontal: 10}}
        />
      </View>
    </AppLayout>
  );
};

export default Payment;
const styles = StyleSheet.create({
  paymentHeading: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xxl,
    color: '#424347',
    marginTop: 30,
  },
  paymentMethodText: {
    fontFamily: fonts.interRegular,
    fontSize: fontSize.l,
    lineHeight: fontSize.xl,
    color: colors.black,
    marginLeft: 10,
  },
  addCardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  paymentMethodImg: {height: 25, width: 25, resizeMode: 'contain'},
});
