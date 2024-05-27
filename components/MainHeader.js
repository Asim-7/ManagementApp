import React from "react";
import { View, Button } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View className="flex-row justify-around p-4 bg-gray-200 mt-10">
      <Button title="Button 1" onPress={() => alert("Button 1 pressed")} />
      <Button title="Button 2" onPress={() => alert("Button 2 pressed")} />
      <Button title="Button 3" onPress={() => alert("Button 3 pressed")} />
    </View>
  );
};

export default Header;
