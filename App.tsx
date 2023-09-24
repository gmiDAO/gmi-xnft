import React from 'react'

import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { ExamplesScreens } from "./screens/ExamplesScreen";
import { EventsScreen } from "./screens/EventsScreen";
import { TokenListNavigator } from "./screens/TokenNavigator";

import { MaterialIcons } from '@expo/vector-icons';

import "../src/comments.css";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={TokenListNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ExamplesScreens}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
