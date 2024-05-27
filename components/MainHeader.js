import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-paper";

const Header = ({ navigation }) => {
  return (
    <View
      className="flex-row justify-around items-center bg-gray-200 pb-2"
      style={{ paddingTop: 60 }}
    >
      <Text className="text-lg">Plan X</Text>
      <Button title="Button 2" onPress={() => alert("Button 2 pressed")} />
      <TouchableOpacity onPress={() => alert("Account clicked!")}>
        <Icon source="account" size={28} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Menu clicked!")}>
        <Icon source="dots-vertical" size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
