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
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return; // Allow numbers only

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }

    // If all digits entered
    if (newOtp.every((digit) => digit !== "")) {
      const finalOtp = newOtp.join("");

      // 🔐 Replace this with API verification
      if (finalOtp === "1234") {
        navigation.replace("Home"); // Navigate to Home
      } else {
        alert("Invalid OTP");
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView style={globleStyles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <Userimage style={styles.avatar} />
        </View>

        {/* Title */}
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

        {/* Bottom Section */}
        <View style={styles.bottomRow}>
          <Text style={styles.notYou}>Not you?</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={globleStyles.arrowContainer}>
              <ArrowIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  avatarWrapper: {
    marginTop: 150,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },

  avatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },

  otpContainer: {
    flexDirection: "row",
    marginTop: 32,
  },

  otpBox: {
    width: 52,
    height: 52,
    backgroundColor: "#F2F2F2",
    borderRadius: 14,
    marginHorizontal: 6,
    textAlign: "center",
    fontSize: 18,
  },

  bottomRow: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  notYou: {
    fontSize: 14,
    color: "#7A7A7A",
    marginRight: 14,
  },
});

export default OtpScreen;
