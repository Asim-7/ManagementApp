import React from "react";
import { useRoute } from "@react-navigation/native";
import BottomNavigation from "../components/BottomNavigation";

export default function MainScreen() {
  const {
    params: { email },
  } = useRoute();

  console.log("Item ID:", email);

  return <BottomNavigation />;
}
