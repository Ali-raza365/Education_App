import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      HeadingView: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Signin: {
        ...commonStyles.fontBold24,
        fontFamily: fontFamily.bold,
        fontWeight: '600',
        marginBottom: moderateScaleVertical(14),
      },
      heading: {
        ...commonStyles.fontSize16,
        color: colors.gray,
      },
      inputsView: {
        flex: 0.5,
        flexDirection: 'column',
      },
      bottomView: {
        flex: 0.3,
        // backgroundColor:"green"
      },
      forgot: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        alignSelf: 'flex-end',
        color: colors.primary,
      },
      line: {
        flex: 1,
        opacity: 0.5,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.gray,
      },
      circle: {
        ...commonStyles.shadowStyle,
        width: moderateScale(70),
        height: moderateScale(70),
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScaleVertical(28),
        borderRadius: moderateScale(100),
      },
      brandLogo: {
        width: moderateScale(30),
        height: moderateScale(30),
        resizeMode: 'cover',
      },
      linkText: {
        color: colors.primary,
        fontFamily: fontFamily.regular,
        fontSize: textScale(14),
        paddingLeft: moderateScale(6),
        textDecorationLine: 'underline',
      },
});

export default styles