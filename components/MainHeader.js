import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-paper";

const Header = ({ navigation }) => {
  return (
    <View
      className="flex-row justify-between items-center bg-gray-200 pb-2 px-4"
      style={{ paddingTop: 60 }}
    >
      <Text className="text-lg">Plan X</Text>
      <View className="flex-row space-x-4">
        <TouchableOpacity onPress={() => alert("Account clicked!")}>
          <Icon source="account" size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Menu clicked!")}>
          <Icon source="dots-vertical" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
