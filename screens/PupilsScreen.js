import { View, useWindowDimensions } from "react-native";
import PupilsHeader from "../components/PupilsHeader ";
import * as React from "react";
import { TabView } from "react-native-tab-view";
import PaymentsScreen from "../screens/PaymentsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

export default function PupilsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "active", title: "Active" },
    { key: "waiting", title: "Waiting" },
    { key: "inactive", title: "Inactive" },
    { key: "enquiries", title: "Enquiries" },
  ]);

  return (
    <View className="flex-1">
      <PupilsHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route, jumpTo }) => {
          switch (route.key) {
            case "active":
              return <PaymentsScreen />;
            case "waiting":
              return <NotificationsScreen />;
            case "inactive":
              return <PaymentsScreen />;
            case "enquiries":
              return <NotificationsScreen />;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}
