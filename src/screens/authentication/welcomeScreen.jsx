import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globleStyles } from '../../globle_css/globle_css';
import LogoBag from '../../../assets/images/logobag.svg';
import ArrowIcon from '../../../assets/images/Arrow.svg';
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={globleStyles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={globleStyles.content}>
        <View style={globleStyles.iconContainer}>
          <View style={globleStyles.iconBackground}>
            <LogoBag />
          </View>
        </View>

        <Text style={globleStyles.title}>Shoppe</Text>
        <Text style={globleStyles.subtitle}>Beautiful eCommerce UI Kit</Text>
        <Text style={globleStyles.subtitle}>for your online store </Text>

        <View style={globleStyles.spacer} />

        <TouchableOpacity
          style={globleStyles.primaryButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={globleStyles.primaryButtonText}>Let's get started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globleStyles.secondaryButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={globleStyles.secondaryButtonText}>I already have an account</Text>
          <View style={globleStyles.arrowContainer}>
            <ArrowIcon />
          </View>
        </TouchableOpacity>

        <View style={globleStyles.bottomIndicator} />
      </View>
    </SafeAreaView>
  );
};



export default WelcomeScreen;