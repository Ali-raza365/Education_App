//import liraries
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical
} from '../../styles/responsiveSize';
import { showError } from '../../utils/helperFunctions';
import styles from './styles';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { googleLogin } from '../../utils/socialLogin';

// create a component
const Login = ({navigation}) => {
  const [secure, setsecure] = useState(true);
  const [user, setuser] = useState(true);


  // useEffect(() => {
  //   GoogleSignin.configure({
  //     // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '77772400395-3mr3gsr9s30j2mp3le6klup32k8g6d51.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
  //     // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //     // forceCodeForRefreshToken: true,
  //   });
  // }, [])
  // const googlesignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo)
  //     // setState({ userInfo });
  //   } catch (error) {
  //     console.log({...error})
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  const onPressSecure = () => {
    setsecure(!secure);
  };
  const onForgotPass = () => {
    navigation.navigate(navigationStrings.FORGOT_PASSWORD);
    alert('press forgot password');
    console.log("dasdasd forgot press")
  };
  const gotoSignUp = () => {
    navigation.navigate(navigationStrings.SIGNUP);

  };
  const onSignIn = () => {
    // actions.login(true);
    showError('login BTN')
    // navigation.navigate(navigationStrings.OTP_VERIFICATION);

  };
  console.log("login page")

  return (
    <WrapperContainer>
      <KeyboardAvoidingView
        style={{flex: 1, margin: moderateScale(16)}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={styles.HeadingView}>
              <Text style={styles.Signin}>Sign In</Text>
              <Text style={styles.heading}>
                Hi Welcome back, your been missed
              </Text>
            </View>
            <View style={styles.inputsView}>
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
              <Text onPress={onForgotPass} style={styles.forgot}>
                Forgot Password?
              </Text>
              <ButtonComp
                btnText="Sign In"
                onPress={onSignIn}
                btnStyle={{marginVertical: moderateScaleVertical(20)}}
              />
            </View>
            <View style={styles.bottomView}>
              <View
                style={{
                  ...commonStyles.flexView,
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
                  onPress={onSignIn}>
                  <FastImage
                    source={imagePath.apple}
                    resizeMode="center"
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.circle}
                  onPress={googleLogin}>
                  <FastImage
                    source={imagePath.google_brand}
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.circle}
                  onPress={onSignIn}>
                  <FastImage
                    source={imagePath.facebook}
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>
              </View>
              <View style={commonStyles.flexCenter}>
                <Text style={commonStyles.fontBold16}>
                  Dont have an account?
                  <Text
                    onPress={gotoSignUp}
                    style={styles.linkText}>
                    {' '}
                    Sign Up
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
export default Login;
