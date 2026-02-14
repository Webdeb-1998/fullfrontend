import { Dimensions, KeyboardAvoidingView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globleStyles } from "../../globle_css/globle_css";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    return (

        <SafeAreaView style={globleStyles.container}>
            <StatusBar barStyle="dark-content" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={globleStyles.keyboardView}
            >
                <View style={globleStyles.loginContent}>
                    {/* Title */}
                    <Text style={[globleStyles.title,{marginBottom:0}]}>Create</Text>
                    <Text style={globleStyles.title}> Account 🖊️</Text>

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
                         <TextInput
                            style={globleStyles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                         <TextInput
                            style={globleStyles.input}
                            placeholder="Enter your number"
                            placeholderTextColor="#999"
                            value={number}
                            onChangeText={setNumber}
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
                            onPress={()=>navigation.navigate('Home')}
                        >
                            <Text style={globleStyles.primaryButtonText}>Done</Text>
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


export default RegisterScreen;