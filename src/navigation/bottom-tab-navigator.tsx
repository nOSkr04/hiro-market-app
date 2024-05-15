import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes } from "./types";
import { HomeTab } from "../tabs/home";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.HomeTab}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen component={HomeTab} name={NavigationRoutes.HomeTab} />
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };
