import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const AppLayout = ({children, containerStyle = {}}) => {
  return (
    <SafeAreaView style={[styles.mainContainer, containerStyle]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default AppLayout;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
