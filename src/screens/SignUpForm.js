import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import HeaderNav from '../components/Layouts/HeaderNav';
import PhoneInput from '../components/PhoneInput';
import CustomButton from '../components/CustomButton';
import {textSettings} from '../constants/globalConstants';
import CustomDatePicker from '../components/Pickers/CustomDatePicker';
import AppLayout from '../components/Layouts/AppLayout';
import {useForm, Controller} from 'react-hook-form';
import CustomDropdown from '../components/Pickers/CustomDropdown';
import GenderPicker from '../components/Pickers/GenderPicker';

const SignUpForm = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = gender => {
    setSelectedGender(gender);
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignUp = data => {
    if (data) {
      navigation.navigate('SignUpSuccess');
    }
  };

  const handleDropdownSelect = value => {
    setSelectedValue(value);
  };

  const dropdownOptions = ['UK', 'US', 'Canada'];
  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <AppLayout>
      <HeaderNav title={'Signup'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              onChangeText={value => field.onChange(value)}
              value={field.value}
              label={'Name*'}
              placeholder={'Your Name'}
              inputContainerStyle={{marginTop: 30}}
            />
          )}
          name="name"
          rules={{
            required: {value: true, message: 'Name is required'},
            minLength: {
              value: 2,
              message: 'Minimum 2 Characters required',
            },
          }}
          defaultValue=""
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name.message}</Text>
        )}
        <Controller
          control={control}
          render={({field}) => (
            <PhoneInput
              placeholder={'Enter Phone No.'}
              customContainerStyle={{marginTop: 15}}
              onChangeText={value => field.onChange(value)}
              value={field.value}
            />
          )}
          name="phone"
          rules={{
            required: {value: true, message: 'Phone is required'},
            minLength: {
              value: 10,
              message: 'Please Enter Valid Number',
            },
          }}
        />
        {errors.phone && (
          <Text style={styles.errorText}>{errors.phone.message}</Text>
        )}

        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              label={'Email'}
              onChangeText={value => field.onChange(value)}
              value={field.value}
              placeholder={'Enter Your Email'}
              inputContainerStyle={{marginTop: 15}}
            />
          )}
          name="email"
          rules={{
            required: {value: true, message: 'Email is require'},
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email must be valid',
            },
          }}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap:20
          }}>
          {/* Date Picker */}

          <CustomDatePicker customStyle={{marginTop:15,flex:1}}/>
          {/* Gender */}
               <GenderPicker
              selectedGender={selectedGender}
              onGenderChange={handleGenderChange}
              label={"Gender"}
              customStyle={{marginTop:15,flex:1}}
            />
        </View>
        {/* Country */}
        <CustomDropdown
          options={dropdownOptions}
          onSelect={handleDropdownSelect}
          label={'Country*'}
          isCountryDropdown={true}
          customDropDownStyle={{
            marginTop: 15,
          }}
          isgender={false}
        />
        <Controller
          control={control}
          render={({field}) => (
            <CustomInput
              onChangeText={value => field.onChange(value)}
              value={field.value}
              label={'Address'}
              placeholder={'Enter Your Address'}
              inputContainerStyle={{marginTop: 15}}
            />
          )}
          name="address"
          rules={{
            required: {value: true, message: 'Address is required'},
            minLength: {
              value: 5,
              message: 'Minimum 5 Characters required',
            },
          }}
          defaultValue=""
        />
        {errors.address && (
          <Text style={styles.errorText}>{errors.address.message}</Text>
        )}
        <View style={{marginTop: 30}} />
        <View style={styles.btnContainer}>
          <CustomButton
            title={textSettings.submit}
            isPrimary={true}
            onPress={handleSubmit(onSignUp)}
          />
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default SignUpForm;
const styles = StyleSheet.create({
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 50},
  errorText: {
    color: 'red',
  },
});
