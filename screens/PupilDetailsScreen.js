import { View, Text, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PupilDetailsScreen() {
  const navigation = useNavigation();
  const {
    params: { id, title, lesson, credit, picture },
  } = useRoute();
  return (
    <View className="flex-1 justify-center items-center bg-slate-300">
      <Pressable onPress={navigation.goBack}>
        <Text className="text-center text-2xl font-bold">
          PupilDetailsScreen: {title}
        </Text>
      </Pressable>
    </View>
  );
}
