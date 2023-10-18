import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../constants/imagePaths';
import {fontSize, fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import DatePicker from 'react-native-date-picker';
import {ms, mvs} from 'react-native-size-matters';
const CustomDatePicker = ({customStyle}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={[{}, customStyle]}>
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setOpen(true)}>
        <Text
          style={[
            styles.dropdownTitle,
            {
              color:
                date.toLocaleDateString() == new Date().toLocaleDateString()
                  ? colors.gray
                  : colors.black,
            },
          ]}>
          {date.toLocaleDateString()}
        </Text>
        <Image source={Images.ic_calendar} style={styles.CalenderImg} />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        mode="date"
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default CustomDatePicker;
const styles = StyleSheet.create({
  CalenderImg: {height: mvs(20), width: ms(20), resizeMode: 'contain'},
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
  dropdownTitle: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
  },
  label: {
    fontFamily: fonts.interMedium,
    fontSize: fontSize.l,
    textAlign: 'left',
    color: colors.gray,
  },
});
