import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationRoutes, RootStackParamList } from "./types";
import { BottomTabsNavigator } from "./bottom-tab-navigator";
import { OnBoardScreen } from "../pages/auth/on-board-screen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const RootStackNavigator = () => {
  const navigationOptions = () => {
    return { headerShown: false };
  };

  return (
    <>
      <Navigator
        initialRouteName={NavigationRoutes.Root}
        screenOptions={navigationOptions}
      >
        <Screen
          component={OnBoardScreen}
          name={NavigationRoutes.OnBoardScreen}
        />
        <Screen component={BottomTabsNavigator} name={NavigationRoutes.Root} />
      </Navigator>
    </>
  );
};

export { RootStackNavigator };
