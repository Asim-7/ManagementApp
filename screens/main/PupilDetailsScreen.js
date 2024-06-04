import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import React from "react";

export default function PupilDetailsScreen() {
  const {
    params: { id, title, lesson, credit, picture },
  } = useRoute();
  return (
    <View className="flex-1 justify-center items-center bg-slate-300">
      <Text className="text-center text-2xl font-bold">
        PupilDetailsScreen: {title}
      </Text>
    </View>
  );
}
