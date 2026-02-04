import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  SafeAreaView 
} from 'react-native';


const ShoppeOnboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            {/* <ShoppingBagIcon /> */}
          </View>
        </View>

        <Text style={styles.title}>Shoppe</Text>
        <Text style={styles.subtitle}>Beautiful eCommerce UI Kit</Text>
        <Text style={styles.subtitle}>for your online store </Text>

        <View style={styles.spacer} />

        <TouchableOpacity 
          style={styles.primaryButton}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Let's get started demo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryButtonText}>I already have an account</Text>
          <View style={styles.arrowContainer}>
            {/* <ArrowIcon /> */}
          </View>
        </TouchableOpacity>

        <View style={styles.bottomIndicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconBackground: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  spacer: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 30,
  },
  secondaryButtonText: {
    color: '#4B5563',
    fontSize: 15,
    marginRight: 8,
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#1F2937',
    borderRadius: 3,
    marginBottom: 10,
  },
});

export default ShoppeOnboarding;