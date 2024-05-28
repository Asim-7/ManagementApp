import { View, Text } from "react-native";
import React from "react";
import PupilsHeader from "../components/PupilsHeader ";

export default function PupilsScreen() {
  return (
    <View className="flex-1">
      <PupilsHeader />
      <View className="flex-1 justify-center items-center bg-slate-300">
        <Text className="text-center text-2xl font-bold">PupilsScreen</Text>
      </View>
    </View>
  );
}
