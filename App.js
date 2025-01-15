import React, { useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from "./app/Navigation/Routes";
import actions from './app/redux/actions';
import { saveUserData } from './app/redux/reducers/auth';
import store from './app/redux/store';
import fontFamily from './app/styles/fontFamily';
import { moderateScale, textScale } from './app/styles/responsiveSize';
import { getFirstTime, getUserData } from './app/utils/utils';
import SplashScreen from 'react-native-splash-screen'


const { dispatch } = store;

const App = () => {

  useEffect(() => {
    SplashScreen.hide();

  }, [])
  

  const init = async () => {
    try {
      const userData = await getUserData();
      const isFirstTime = await getFirstTime();
      if (userData && !!userData.token) {
        console.log("enter")
        dispatch(saveUserData(userData));
      }
      if (!!isFirstTime) {
        actions.isFirstTime(true)
      }
      console.log('is first time app', isFirstTime)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.medium,
            fontSize: textScale(16)
          }}
          position="top"
        />
      </SafeAreaProvider>
    </Provider>
  );
};


export default App;