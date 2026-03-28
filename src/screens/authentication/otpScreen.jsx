import React, { useRef, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globleStyles } from "../../globle_css/globle_css";
import ArrowIcon from "../../../assets/images/Arrow.svg";
import Userimage from "../../../assets/images/avatar.svg";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const OtpScreen = () => {
  const navigation = useNavigation();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef([]);

  // ✅ Handle input change
  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setError("");

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  // ✅ Backspace handling
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // ✅ Validate OTP
  const validateOtp = () => {
    if (otp.some((digit) => digit === "")) {
      setError("Please enter complete OTP");
      return false;
    }
    return true;
  };

  // ✅ Verify OTP
  const handleVerify = () => {
    if (!validateOtp()) return;

    const finalOtp = otp.join("");

    // 🔐 Replace with API
    if (finalOtp === "1234") {
      navigation.replace("Home");
    } else {
      setError("Invalid OTP");
    }
  };

  // 🔁 Resend OTP (dummy)
  const handleResend = () => {
    setOtp(["", "", "", ""]);
    inputs.current[0].focus();
    setError("");
    alert("OTP Resent!");
  };

  return (
    <SafeAreaView style={globleStyles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Userimage style={styles.avatar} />
        </View>

        <Text style={globleStyles.title}>Hello, Romina!!</Text>
        <Text style={globleStyles.subtitle}>Type your OTP</Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* ❌ Error */}
        {error ? (
          <Text style={globleStyles.errorText}>{error}</Text>
        ) : null}

        {/* ✅ Verify Button */}
        <TouchableOpacity
          style={[globleStyles.primaryButton, { marginTop: 20, width: "80%" }]}
          onPress={handleVerify}
        >
          <Text style={globleStyles.primaryButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* 🔁 Resend */}
        <TouchableOpacity onPress={handleResend} style={{ marginTop: 15 }}>
          <Text style={{ color: "#007BFF" }}>Resend OTP</Text>
        </TouchableOpacity>

        {/* Bottom */}
        <View style={styles.bottomRow}>
          <Text style={styles.notYou}>Not you?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={globleStyles.arrowContainer}>
              <ArrowIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;