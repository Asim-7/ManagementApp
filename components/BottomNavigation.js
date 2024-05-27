import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "./HomeScreen";

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
    },
    { key: "pupils", title: "Pupils", focusedIcon: "account-multiple" },
    { key: "payments", title: "Payments", focusedIcon: "credit-card-outline" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={({ route, jumpTo }) => {
        switch (route.key) {
          case "home":
            return <HomeScreen />;
          case "pupils":
            return <AlbumsRoute />;
          case "payments":
            return <RecentsRoute />;
          case "notifications":
            return <NotificationsRoute />;
        }
      }}
    />
  );
};

export default MyComponent;
