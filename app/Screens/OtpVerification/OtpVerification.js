//import liraries
import React, {useRef, useState} from 'react';
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
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import HeaderComp from '../../Components/HeaderComp';

// create a component
const OtpVerification = ({navigation}) => {
  const [otpInput, setOtpInput] = useState('');

  const input = useRef(null);
  const handleCellTextChange = async (text, i) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };

  const onReSend = () => {
    navigation.navigate(navigationStrings.FORGOT_PASSWORD);
    alert('press forgot password');
  };
  const onSignUp = () => {
    showError('tvtyvtv');
    navigation.navigate(navigationStrings.HOME);
  };
  const GoBack =()=>{
    navigation.navigate(navigation.goBack())
  }

  return (
    <WrapperContainer>
      <KeyboardAvoidingView
        style={{flex: 1, margin: moderateScale(16)}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={styles.HeadingView}>
              <HeaderComp onPressLeft={GoBack} />
              <Text style={styles.verifyCode}>Verify Code</Text>
              <Text style={styles.heading}>
                Please enter the code we just sent to email
              </Text>
              <Text style={styles.email}>example@gmail.com</Text>
            </View>
            <View style={styles.inputsView}>
              <OTPTextView
                ref={input}
                // defaultValue={'----'}
                containerStyle={styles.textInputContainer}
                handleTextChange={setOtpInput}
                textInputStyle={styles.textInputStyle}
                handleCellTextChange={handleCellTextChange}
                inputCount={4}
                tintColor={colors.primary}
                offTintColor={colors.inputBg}
                keyboardType="numeric"
              />
              <View style={styles.ResendVew}>
                <Text>Didn't receive OTP?</Text>
                <Text onPress={onReSend} style={styles.resend}>
                  Resend Code
                </Text>
              </View>

              <ButtonComp
                btnText="Verify"
                onPress={onSignUp}
                btnStyle={{marginVertical: moderateScaleVertical(20)}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

//make this component available to the app
export default OtpVerification;
