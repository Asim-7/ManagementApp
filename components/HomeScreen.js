import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-300">
      <Button
        className="absolute top-4 left-4 mt-10"
        mode="contained"
        icon={"arrow-left"}
      >
        Back
      </Button>
      <Text className="text-center text-2xl font-bold">This is my profile</Text>
    </View>
  );
}
