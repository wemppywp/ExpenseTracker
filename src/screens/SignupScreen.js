import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {colors} from '../constants/theme';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        {/* header */}
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={24} color={colors.app_black} />
          </TouchableOpacity>
          <View>
            <Text>Sign Up</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//const styles = StyleSheet.create({});

export default SignupScreen;
