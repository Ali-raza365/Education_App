//import liraries
import React, { useCallback, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { DOTS_Size, Slides } from '../../constants/constatnts';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  MOBILE_WIDTH,
  moderateScale,
  width
} from '../../styles/responsiveSize';
import { _setItem } from '../../utils/async';
import styles from './styels';


// create a component
const OnBoarding = ({navigation}) => {
  
  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, MOBILE_WIDTH + 5 * 2);

  const _onSkipClick = useCallback(() => {
    _setItem('onboard', '1')
      .then(() => {
        navigation.navigate(navigationStrings.LOGIN);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  const renderItem = useCallback(({item, index}) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [width, 0, -width],
    });

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
    });

    return (
      <View style={styles._itemContainer}>
        <TouchableOpacity
          onPress={() => {
            _onSkipClick();
          }}
          style={styles._skipBtn}>
          <Text style={styles._skipText}>
            {Slides?.length !== index + 1 ? 'Skip' : 'Login'}
          </Text>
        </TouchableOpacity>
        <View style={commonStyles.flexCenter}>
          <Animated.Image
            source={item.image}
            style={[styles._image, {transform: [{scale}]}]}
          />
        </View>

        <Animated.Text style={[styles._title, {transform: [{translateX}]}]}>
          {item.title}
        </Animated.Text>
        <Animated.Text style={[styles._text, {transform: [{translateX}]}]}>
          {item.description}
        </Animated.Text>
      </View>
    );
  }, []);

  const renderBots = useCallback(() => {
    return (
      <>
   
        <View style={styles._dotsView}>
          {Slides.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.4, 1, 0.4],
              extrapolate: 'clamp',
            });

            let width = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [DOTS_Size, DOTS_Size, DOTS_Size],
              extrapolate: 'clamp',
            });
            console.log('first');
            return (
              <Animated.View
                key={i}
                style={{
                  opacity: opacity,
                  height: moderateScale(DOTS_Size),
                  width: width,
                  backgroundColor: colors.secondary,
                  margin: moderateScale(5),
                  borderRadius: moderateScale(DOTS_Size),
                }}
              />
            );
          })}
        </View>
      </>
    );
  }, []);


  return (
    <WrapperContainer containerStyle={{marginHorizontal: 0}}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToInterval={width}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        style={{flexGrow: 0}}
        contentContainerStyle={styles._scrollContainer}
        data={Slides}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
     {/* Rendering Dots */}
      {renderBots()}
    </WrapperContainer>
  );
};



//make this component available to the app
export default OnBoarding;
