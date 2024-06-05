import { View, Text } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import MainHeader from "../../components/MainHeader";

export default function HomeScreen({ useremail }) {
  const [selected, setSelected] = useState("");

  // Calendar reference: https://www.npmjs.com/package/react-native-calendars

  return (
    <View className="flex-1">
      <MainHeader />
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
    </View>
  );
}
