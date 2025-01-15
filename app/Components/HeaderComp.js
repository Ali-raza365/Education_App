import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {MOBILE_WIDTH, moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

export default function HeaderComp({leftText, onPressLeft,onPressRight, headerStyle}) {
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      <View style={commonStyles.flexView}>
        <TouchableOpacity style={styles.leftIcon} onPress={onPressLeft}>
          <Image
            style={{width: moderateScale(30), height: moderateScale(30)}}
            source={imagePath.arrow_left}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>{leftText}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    width:MOBILE_WIDTH,
    minHeight: moderateScale(48),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: moderateScale(16),
  },
  leftIcon: {
    ...commonStyles.shadowStyle,
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(40),
  },
  textStyle: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.medium,
    color: colors.themeColor,
    textTransform: 'uppercase',
  },
});
