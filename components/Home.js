import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <Button
        className="mt-10 absolute top-4 left-4"
        icon="arrow-left"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </Button>
      <Text className="text-center text-2xl font-bold">
        This is {route.params.email} profile
      </Text>
    </View>
  );
}
