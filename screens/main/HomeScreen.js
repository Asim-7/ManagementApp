import { View } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import TimelineCalendarScreen from "./TimelineCalendarScreen";

export default function HomeScreen({ useremail }) {
  return (
    <View className="flex-1">
      <MainHeader />
      <TimelineCalendarScreen />
    </View>
  );
}
