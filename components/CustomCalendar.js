import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";

// Calendar reference: https://www.npmjs.com/package/react-native-calendars
// Link: https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/

export default function CustomCalendar(props) {
  return (
    <Agenda
      selected="2024-06-12"
      items={{
        "2024-06-12": [
          { name: "Cycling" },
          { name: "Walking" },
          { name: "Running" },
        ],
        "2024-06-14": [{ name: "Writing" }],
      }}
      renderItem={(item, isFirst) => (
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
            marginTop: 17,
          }}
        >
          <Text style={{ color: "#888", fontSize: 16 }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
