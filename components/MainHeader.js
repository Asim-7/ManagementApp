import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-paper";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      className="flex-row justify-between items-center bg-gray-200 pb-2 px-4"
      style={{ paddingTop: 60 }}
    >
      <Text className="text-lg font-bold">Plan X</Text>
      <View className="flex-row space-x-4">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
