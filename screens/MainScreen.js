import React from "react";
import BottomNavigation from "../components/BottomNavigation";
import { View } from "react-native";
import MainHeader from "../components/MainHeader";

export default function MainScreen({ navigation, route }) {
  return (
    <View className="flex-1">
      <MainHeader />
      <BottomNavigation />
    </View>
  );
}
