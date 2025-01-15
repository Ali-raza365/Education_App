import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeadingView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyCode: {
    ...commonStyles.fontBold24,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    marginBottom: moderateScaleVertical(14),
  },
  heading: {
    ...commonStyles.fontSize16,
    color: colors.gray,
    textAlign: 'center',
  },
  email: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.medium,
    color: colors.primary,
    alignSelf: 'center',
  },
  inputsView: {
    flex: 0.7,
    flexDirection: 'column',
  },
    textInputContainer: {
      marginBottom: moderateScaleVertical(20),
    
  },
  textInputStyle:{
    width:moderateScale(60),
    height:moderateScale(50),
    borderRadius:moderateScale(10),
    backgroundColor:colors.inputBg,
    color:colors.gray,
  },
  ResendVew: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  resend: {
    fontSize: textScale(14),
    fontFamily: fontFamily.medium,
    color: colors.black,
    textDecorationLine: 'underline',
    textDecorationColor: colors.black,
  },
});

export default styles;
