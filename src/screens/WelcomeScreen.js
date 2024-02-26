import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <View>
          <LottieView
            source={require('../../assets/animation/saving_money.json')}
            autoPlay
            loop
          />
        </View>
        <View>
          <Text>Gain total control of your money</Text>
          <Text>Become your own money manager and make every cent count</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

//const styles = StyleSheet.create({});

export default WelcomeScreen;
