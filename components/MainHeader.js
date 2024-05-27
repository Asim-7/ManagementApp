import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

const Header = ({ navigation }) => {
  return (
    <View className="flex-row justify-around items-center p-4 bg-gray-200 mt-10">
      <TouchableOpacity onPress={() => alert("Icon clicked!")}>
        <Icon source="menu" size={28} />
      </TouchableOpacity>
      <Button title="Button 1" onPress={() => alert("Button 1 pressed")} />
      <Button title="Button 2" onPress={() => alert("Button 2 pressed")} />
      <Button title="Button 3" onPress={() => alert("Button 3 pressed")} />
    </View>
  );
};

export default Header;
