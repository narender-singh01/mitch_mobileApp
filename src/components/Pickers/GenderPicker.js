import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../constants/colors';
import {fontSize, fonts} from '../../constants/fonts';

const GenderPicker = ({selectedGender, onGenderChange, label, customStyle}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const genders = ['Male', 'Female', 'Other'];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleGenderSelect = gender => {
    onGenderChange(gender);
    toggleModal();
  };

  return (
    <View style={[{}, customStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
        <Text
          style={[
            styles.dropdownTitle,
            {
              color: selectedGender ? colors.black : colors.gray,
            },
          ]}>
          {selectedGender || 'Select Gender'}
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}>
        <View style={styles.modalContainer}>
          {genders.map(gender => (
            <TouchableOpacity
              key={gender}
              onPress={() => handleGenderSelect(gender)}
              style={styles.modalOption}>
              <Text style={{color: colors.black}}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
    textAlign: 'left',
    color: colors.gray,
  },
  dropdownTitle: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
  },
  dropdownButton: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.textInputBorder,
    paddingVertical: 10,
    marginTop: 10,
  },
  modal: {
    justifyContent: 'center', // Align the modal at the bottom of the screen
    margin: 40,
    backfaceVisibility: 'hidden',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalOption: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
  },
});

export default GenderPicker;
