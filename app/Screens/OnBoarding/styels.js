import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';


const styles = StyleSheet.create({
    _mainContainer: {
      flex: 1,
    },
    _skipBtn: {
      alignSelf: 'flex-end',
      marginRight: 10,
      marginTop: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    _skipText: {
      color: colors.primary,
      fontFamily: fontFamily.medium,
      fontSize: textScale(14),
    },
    _scrollContainer: {},
    _itemContainer: {
      width: width,
      height: height,
      padding: moderateScale(12),
      paddingTop: 0,
      paddingRight: 0,
    },
    _image: {
      width: width - 50,
      height: height / 2,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    _title: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.black,
      textAlign: 'center',
      fontWeight: '700',
      marginTop: moderateScaleVertical(10),
    },
    _text: {
      marginTop: moderateScaleVertical(10),
      fontSize: moderateScale(16),
      paddingHorizontal: 10,
      color: colors.black,
      textAlign: 'center',
      fontFamily: fontFamily.regular,
    },
    _bullet: {
      fontSize: moderateScale(12),
      color: colors.whiteOpacity50,
    },
    _dotsView: {
      flexDirection: 'row',
      position: 'absolute',
      alignSelf: 'center',
      bottom: moderateScaleVertical(100),
    },
  });

export default styles