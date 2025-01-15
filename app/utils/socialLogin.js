// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
// import { showError } from '../helper/helperFunctions';
// import { appleAuth } from '@invertase/react-native-apple-authentication';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import {
//     LoginManager,
//     GraphRequest,
//     GraphRequestManager,
// } from 'react-native-fbsdk';

export const googleLogin = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '738604534942-1pptu2p9tcbs2j1ocssqtt0i3tuc60kp.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
      
          // const {idToken} = await GoogleSignin.signIn();
          // const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
          console.log({userInfo})
          // auth().signInWithCredential(googleCredentials);
          return userInfo;

    } catch (error) {
        console.log({...error})
        // showError(error.message)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            return error
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(error)
            return error
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error)
            return error
            // play services not available or outdated
        } else {
            console.log(error)
            return error
            // some other error happened
        }
    }
}


// export const fbLogin = (resCallback) => {
//     LoginManager.logOut();
//     return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
//         result => {
//             console.log(result, 'the result of login i get are as follow');
//             if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
//                 resCallback({ message: "Email is required" });
//             }
//             if (result.isCancelled) {
//                 console.log("erorrr")
//             } else {
//                 const infoRequest = new GraphRequest(
//                     '/me?fields=email,name,picture,friends',
//                     null,
//                     resCallback,
//                 );
//                 new GraphRequestManager().addRequest(infoRequest).start();
//             }
//         },
//         function (error) {
//             console.log('Login fail with error: ' + error);
//         },
//     );
// };



// export const handleAppleLogin = async () => {
//     const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: appleAuth.Operation.LOGIN,
//         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//     });
//     return appleAuthRequestResponse;
// }



export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: 'web_client_id',
      scopes: ['profile', 'email'],
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredentials);
    return userInfo;
  } catch (error) {
    console.log('=> Google Sign In', error);
    return null;
  }
};