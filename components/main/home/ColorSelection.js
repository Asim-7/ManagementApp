import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function ColorSelection({ eventColor, onClick }) {
  const colors = [
    "#e6add8",
    "#FFFFFF",
    "skyblue",
    "orange",
    "mediumpurple",
    "crimson",
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Default selected color

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.circle,
            { backgroundColor: color },
            selectedColor === color && styles.selected,
          ]}
          onPress={() => setSelectedColor(color)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "whitesmoke",
    marginHorizontal: 10,
  },
  selected: {
    borderColor: "orange", // Highlight selected circle with a border
  },
});
