import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function ColorSelection() {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
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
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: {
    borderColor: "gray", // Highlight selected circle with a border
  },
});
