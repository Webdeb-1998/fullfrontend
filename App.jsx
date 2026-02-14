import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globleStyles } from './src/globle_css/globle_css';
// import LogoBag from '/src/assets/images/logobag.svg';
// import ArrowIcon from '/src/assets/images/Arrow.svg';
const ShoppeOnboarding = () => {
  return (
    <SafeAreaView style={globleStyles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={globleStyles.content}>
        <View style={globleStyles.iconContainer}>
          <View style={globleStyles.iconBackground}>
            {/* <LogoBag /> */}
          </View>
        </View>

        <Text style={globleStyles.title}>Shoppe</Text>
        <Text style={globleStyles.subtitle}>Beautiful eCommerce UI Kit</Text>
        <Text style={globleStyles.subtitle}>for your online store </Text>

        <View style={globleStyles.spacer} />

        <TouchableOpacity
          style={globleStyles.primaryButton}
          activeOpacity={0.8}
        >
          <Text style={globleStyles.primaryButtonText}>Let's get started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globleStyles.secondaryButton}
          activeOpacity={0.7}
        >
          <Text style={globleStyles.secondaryButtonText}>I already have an account</Text>
          <View style={globleStyles.arrowContainer}>
            {/* <ArrowIcon /> */}
          </View>
        </TouchableOpacity>

        <View style={globleStyles.bottomIndicator} />
      </View>
    </SafeAreaView>
  );
};



export default ShoppeOnboarding;