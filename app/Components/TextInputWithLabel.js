import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';
import FastImage from 'react-native-fast-image';
import imagePath from '../constants/imagePath';

const TextInputWithLabel = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  textStyle,
  placeholderTextColor,
  label,
  onPressSecure,
  secure,
  showPass,
  ...props
}) => {
  return (
    <View style={{}}>
      <Text style={styles.labelText}>{label} </Text>
      <View
        style={{
          ...styles.inputStyle,
          ...inputStyle,
        }}>
        <TextInput
          style={{
            ...styles.textStyle,
            ...textStyle,
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.gray
          }
          {...props}
        />
        {!!secure ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{...styles.textStyle, flex: 0}}
            onPress={onPressSecure}>
          {showPass?  <FastImage source={imagePath.eye_line} style={styles.scureIcon} />:
          <FastImage source={imagePath.eye_off} style={styles.scureIcon} /> }
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  labelText: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.bold,
    marginBottom: moderateScaleVertical(8),
    color: colors.black,
  },
  inputStyle: {
    height: moderateScale(45),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    marginBottom: moderateScaleVertical(14),
  },
  textStyle: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    flex: 1,
    color: colors.black,
  },
  scureIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default TextInputWithLabel;
