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

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  const [errors, setErrors] = useState({});

  // ✅ Validation Function
  const validate = () => {
    let valid = true;
    let tempErrors = {};

    // Email validation
    if (!email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
      valid = false;
    }

    // Password validation
    if (!password) {
      tempErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // Phone validation
    if (!number) {
      tempErrors.number = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(number)) {
      tempErrors.number = "Enter valid 10 digit number";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  // ✅ Submit handler
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Submitted:", { email, password, number });
      navigation.navigate('Home');
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
          
          <Text style={[globleStyles.title, { marginBottom: 0 }]}>Create</Text>
          <Text style={globleStyles.title}> Account 🖊️</Text>

          <View style={globleStyles.inputContainer}>

            {/* Email */}
            <TextInput
              style={globleStyles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={globleStyles.errorText}>{errors.email}</Text>}

            {/* Password */}
            <TextInput
              style={globleStyles.input}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {errors.password && <Text style={globleStyles.errorText}>{errors.password}</Text>}

            {/* Phone */}
            <TextInput
              style={globleStyles.input}
              placeholder="Enter your number"
              placeholderTextColor="#999"
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric"
            />
            {errors.number && <Text style={globleStyles.errorText}>{errors.number}</Text>}

          </View>

          <View style={globleStyles.buttonsContainer}>
            <TouchableOpacity
              style={[globleStyles.primaryButton, { maxWidth: '100%' }]}
              activeOpacity={0.8}
              onPress={handleSubmit}
            >
              <Text style={globleStyles.primaryButtonText}>Done</Text>
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

export default RegisterScreen;