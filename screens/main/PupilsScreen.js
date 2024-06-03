import { View, useWindowDimensions, Text, FlatList } from "react-native";
import PupilsHeader from "../../components/PupilsHeader ";
import React, { useState } from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import sampleData from "../../testData/sampleData.json";

const renderItem = ({ item }) => (
  <View style={{ flexDirection: "row", padding: 10 }}>
    <Text style={{ flex: 1 }}>{item.name}</Text>
    <Text style={{ flex: 1 }}>{item.lesson}</Text>
    <Text style={{ flex: 1, color: "green" }}>{item.credit}</Text>
  </View>
);

const ActiveRoute = () => (
  <FlatList
    data={sampleData.categories.active}
    renderItem={renderItem}
    keyExtractor={(item) => item.name}
  />
);

const WaitingRoute = () => (
  <FlatList
    data={sampleData.categories.waiting}
    renderItem={renderItem}
    keyExtractor={(item) => item.name}
  />
);

const InactiveRoute = () => (
  <FlatList
    data={sampleData.categories.inactive}
    renderItem={renderItem}
    keyExtractor={(item) => item.name}
  />
);

export default function PupilsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "active", title: "Active" },
    { key: "waiting", title: "Waiting" },
    { key: "inactive", title: "Inactive" },
  ]);

  const renderScene = SceneMap({
    active: ActiveRoute,
    waiting: WaitingRoute,
    inactive: InactiveRoute,
  });

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
    <View style={{ flex: 1 }}>
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
