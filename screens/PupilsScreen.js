import { View, Text, useWindowDimensions } from "react-native";
import PupilsHeader from "../components/PupilsHeader ";
import * as React from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import PaymentsScreen from "../screens/PaymentsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

export default function PupilsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <View className="flex-1">
      <PupilsHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route, jumpTo }) => {
          switch (route.key) {
            case "first":
              return <PaymentsScreen />;
            case "second":
              return <NotificationsScreen />;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}
