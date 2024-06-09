import React from "react";
import { useRoute } from "@react-navigation/native";
import BottomNavigation from "../../components/main/BottomNavigation";

export default function MainScreen() {
  const {
    params: { email },
  } = useRoute();

  return <BottomNavigation useremail={email} />;
}
