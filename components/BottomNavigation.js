import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import PupilsScreen from "../screens/PupilsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const MyComponent = ({ useremail }) => {
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
            return <HomeScreen useremail={useremail} />;
          case "pupils":
            return <PupilsScreen />;
          case "payments":
            return <PaymentsScreen />;
          case "notifications":
            return <NotificationsScreen />;
        }
      }}
    />
  );
};

export default MyComponent;
