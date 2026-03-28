import {
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globleStyles } from "../../globle_css/globle_css";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // ✅ Validation function
  const validateEmail = () => {
    if (!email) {
      setError("Enter your valid email");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
      return false;
    }

    setError('');
    return true;
  };

  // ✅ Handle button press
  const handleNext = () => {
    if (validateEmail()) {
      navigation.navigate('Otp', { email }); // pass email if needed
    }
  };

  return (
    <SafeAreaView style={globleStyles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globleStyles.keyboardView}
      >
        <View style={globleStyles.loginContent}>
          
          <Text style={globleStyles.title}>LOGIN</Text>
          <Text style={globleStyles.subtitle}>Good to see you back! 🖤</Text>

          <View style={globleStyles.inputContainer}>
            <TextInput
              style={globleStyles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError(''); // clear error while typing
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* ❌ Error message */}
            {error ? (
              <Text style={globleStyles.errorText}>{error}</Text>
            ) : null}
          </View>

          <View style={globleStyles.buttonsContainer}>
            <TouchableOpacity
              style={[globleStyles.primaryButton, { maxWidth: '100%' }]}
              activeOpacity={0.8}
              onPress={handleNext}
            >
              <Text style={globleStyles.primaryButtonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[globleStyles.button, globleStyles.cancelButton]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Text style={globleStyles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;