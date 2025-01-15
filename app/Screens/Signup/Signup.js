//import liraries
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import CheckBox from '@react-native-community/checkbox';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';
import colors from '../../styles/colors';

// create a component
const Signup = ({navigation}) => {
  const [secure, setsecure] = useState(true);

  const onPressSecure = () => {
    setsecure(!secure);
  };
  const onForgotPass = () => {
    navigation.navigate(navigationStrings.FORGOT_PASSWORD);
    alert('press forgot password');
  };
  const gotoSigIn = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };
  const onSignUp = () => {
    // actions.login(true);
    showError('tvtyvtv');
    // navigation.navigate(navigationStrings.OTP_VERIFICATION);
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <WrapperContainer>
      <KeyboardAvoidingView
        style={{flex: 1, margin: moderateScale(16)}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={styles.HeadingView}>
              <Text style={styles.Signin}>Create Account</Text>
              <Text style={styles.heading}>
                Fill your information below or register with your social
                accounts.
              </Text>
            </View>
            <View style={styles.inputsView}>
              <TextInputWithLabel
                label={'Name'}
                placeholder={'example@gmail.com'}
                keyboardType="email-address"
                onChangeText={txt => {
                  console.log(txt);
                }}
              />
              <TextInputWithLabel
                label={'Email'}
                placeholder={'example@gmail.com'}
                keyboardType="email-address"
                onChangeText={txt => {
                  console.log(txt);
                }}
              />
              <TextInputWithLabel
                label={'Password'}
                placeholder={'*************'}
                secureTextEntry={secure}
                onPressSecure={onPressSecure}
                secure={true}
                showPass={secure}
                onChangeText={txt => {
                  console.log(txt);
                }}
              />
              <View style={styles.termsVew}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  style={styles.CheckBox}
                  tintColors={{
                    true: colors.primary,
                    false: colors.gray,
                  }}
                />
                <Text>Agree with</Text>
                <Text onPress={onForgotPass} style={styles.termsAndCondtion}>
                  Terms & Condition
                </Text>
              </View>

              <ButtonComp
                btnText="Sign Up"
                onPress={onSignUp}
                btnStyle={{marginVertical: moderateScaleVertical(20)}}
              />
            </View>
            <View style={styles.bottomView}>
              <View
                style={{
                  ...commonStyles.flexView,
                  marginTop: moderateScaleVertical(18),
                  marginHorizontal: moderateScale(18),
                }}>
                <View style={styles.line}></View>
                <Text>Or sign in with</Text>
                <View style={styles.line}></View>
              </View>
              <View
                style={{
                  ...commonStyles.flexCenter,
                  // marginHorizontal: moderateScale(18),
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.circle}
                  onPress={onSignUp}>
                  <FastImage
                    source={imagePath.apple}
                    resizeMode="center"
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.circle}
                  onPress={onSignUp}>
                  <FastImage
                    source={imagePath.google_brand}
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.circle}
                  onPress={onSignUp}>
                  <FastImage
                    source={imagePath.facebook}
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>
              </View>
              <View style={commonStyles.flexCenter}>
                <Text style={commonStyles.fontBold16}>
                  Already have an account?
                  <Text onPress={gotoSigIn} style={styles.linkText}>
                    {' '}
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Signup;
