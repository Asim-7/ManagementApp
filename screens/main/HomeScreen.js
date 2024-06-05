import { View } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import CustomCalendar from "../../components/CustomCalendar";

export default function HomeScreen({ useremail }) {
  return (
    <View className="flex-1">
      <MainHeader />
      <CustomCalendar />
    </View>
  );
}
