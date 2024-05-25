import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-8">Login</Text>
      <TextInput
        className="w-80 h-12 px-4 mb-4 border border-gray-300 rounded"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className="w-80 h-12 px-4 mb-8 border border-gray-300 rounded"
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity className="w-80 h-12 bg-blue-500 rounded justify-center items-center">
        <Text className="text-white text-lg">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
