import { View, useWindowDimensions, Text, FlatList, Image } from "react-native";
import PupilsHeader from "../../components/PupilsHeader ";
import React, { useState } from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import sampleData from "../../testData/sampleData.json";
import { Icon } from "react-native-paper";

const renderItem = ({ item }) => (
  <View
    style={{ flexDirection: "row", padding: 10 }}
    className="justify-center items-center"
  >
    <Image
      source={{
        uri: "https://guardian.ng/wp-content/uploads/2023/06/ai.jpg",
      }}
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
      }}
    />
    <View className="flex-1 flex-col" style={{ marginStart: 10 }}>
      <Text style={{ flex: 1, fontWeight: "bold", fontSize: 17 }}>
        {item.name}
      </Text>
      <Text style={{ flex: 1, color: "royalblue" }}>{item.lesson}</Text>
    </View>
    <Text style={{ flex: 1, color: "green" }}>{item.credit}</Text>
    <Icon source="chevron-right" size={28} />
  </View>
);

const ActiveRoute = () => (
  <FlatList
    data={sampleData.categories.active}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
);

const WaitingRoute = () => (
  <FlatList
    data={sampleData.categories.waiting}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
);

const InactiveRoute = () => (
  <FlatList
    data={sampleData.categories.inactive}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
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
