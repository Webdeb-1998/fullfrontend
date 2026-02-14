import { Dimensions, KeyboardAvoidingView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globleStyles } from "../../globle_css/globle_css";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    return (

        <SafeAreaView style={globleStyles.container}>
            <StatusBar barStyle="dark-content" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={globleStyles.keyboardView}
            >
                <View style={globleStyles.loginContent}>
                    {/* Title */}
                    <Text style={globleStyles.title}>LOGIN</Text>
                    <Text style={globleStyles.subtitle}>Good to see you back! 🖤</Text>

                    {/* Email Input */}
                    <View style={globleStyles.inputContainer}>
                        <TextInput
                            style={globleStyles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    {/* Buttons Container */}
                    <View style={globleStyles.buttonsContainer}>
                        <TouchableOpacity
                            style={[globleStyles.primaryButton,{maxWidth:'100%'}]}
                            activeOpacity={0.8}
                            onPress={()=>navigation.navigate('Otp')}
                        >
                            <Text style={globleStyles.primaryButtonText}>Next</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[globleStyles.button, globleStyles.cancelButton]}
                            activeOpacity={0.8}
                            onPress={()=>navigation.navigate('Welcome')}
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