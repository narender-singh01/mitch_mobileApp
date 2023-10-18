import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Images} from '../../constants/imagePaths';
import {ms, mvs} from 'react-native-size-matters';
import {fontSize, fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';

function OrderSuccessModal({show, setShow}) {
  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <Modal isVisible={show} hasBackdrop={true}>
      <TouchableWithoutFeedback
        onPress={() => {
          setShow(false);
        }}>
        <View
          style={{
            paddingVertical: 30,
            borderRadius: 33,
            alignItems: 'center',
            backgroundColor: colors.white,
            justifyContent: 'center',
          }}>
          <Image
            source={Images.ic_orderSuccess}
            style={{height: mvs(128), width: ms(128), resizeMode: 'contain'}}
          />
          <Text
            style={{
              fontSize: fontSize.xl,
              lineHeight: fontSize.xxxl,
              color: '#484646',
              paddingHorizontal: 20,
              textAlign: 'center',
              marginTop: 30,
              fontFamily: fonts.poppinsMedium,
            }}>
            Your Order has been Placed Successfully
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default OrderSuccessModal;
