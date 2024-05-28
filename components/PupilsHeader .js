import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-paper";

const PupilsHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      className="flex-row justify-between items-center bg-gray-200 pb-2 px-4"
      style={{ paddingTop: 60 }}
    >
      <Text className="text-lg font-bold">Pupils</Text>
      <View className="flex-row space-x-4">
        <TouchableOpacity onPress={() => alert("magnify clicked!")}>
          <Icon source="magnify" size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("refresh clicked!")}>
          <Icon source="refresh" size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("plus clicked!")}>
          <Icon source="plus" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PupilsHeader;
