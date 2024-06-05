import React, { useState } from "react";
import { Calendar } from "react-native-calendars";

// Calendar reference: https://www.npmjs.com/package/react-native-calendars
// Link: https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/

export default function CustomCalendar(props) {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
        console.log(`Date pressed: ${day.dateString}`);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
      initialDate="2024-06-01"
      minDate="2024-01-01"
      maxDate="2028-01-01"
      disableAllTouchEventsForDisabledDays={true}
      {...props}
    />
  );
}
