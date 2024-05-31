import { View, useWindowDimensions, Text } from "react-native";
import PupilsHeader from "../../components/PupilsHeader ";
import * as React from "react";
import { TabView, TabBar } from "react-native-tab-view";
import PaymentsScreen from "./PaymentsScreen";
import NotificationsScreen from "./NotificationsScreen";

export default function PupilsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "active", title: "Active" },
    { key: "waiting", title: "Waiting" },
    { key: "inactive", title: "Inactive" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "active":
        return <PaymentsScreen />;
      case "waiting":
        return <NotificationsScreen />;
      case "inactive":
        return <PaymentsScreen />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "blue" }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? "blue" : "gray", margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View className="flex-1">
      <PupilsHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
