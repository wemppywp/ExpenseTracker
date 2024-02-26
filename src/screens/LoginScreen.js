import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {colors} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
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
            <Text>Login</Text>
          </View>
        </View>
        {/* form */}
        <View>
          <Text>Email</Text>
          <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

//const styles = StyleSheet.create({});

export default LoginScreen;
