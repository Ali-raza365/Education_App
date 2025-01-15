import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';

import commonStyles, {hitSlopProp} from '../styles/commonStyles';

const ButtonComp = ({
  onPress = () => {},
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{...styles.btnStyle, ...btnStyle}}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.primary,
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(8),
  },
  btnTextStyle: {
    ...commonStyles.fontSize16,
    color: colors.white,
  },
});
export default ButtonComp;
