//import libraries
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate(navigationStrings.ON_BOARDING)
        }, 1000);
    },[])
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <FastImage
          style={{width: moderateScale(130), height: moderateScale(120)}}
          source={imagePath?.fullLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Splash;
