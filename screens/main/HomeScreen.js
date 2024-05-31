import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";

export default function HomeScreen({ useremail }) {
  return (
    <View className="flex-1">
      <MainHeader />
      <View className="flex-1 justify-center items-center bg-slate-300">
        <Text className="text-center text-2xl font-bold">
          This is {useremail} screen
        </Text>
      </View>
    </View>
  );
}
