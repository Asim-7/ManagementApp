import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation, route }) {
  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <TouchableOpacity
        className="absolute top-4 left-4"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white text-2xl mt-10">Back</Text>
      </TouchableOpacity>
      <Text className="text-center text-2xl font-bold">
        This is {route.params.email} profile
      </Text>
    </View>
  );
}
