/* eslint-disable no-unused-vars */
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum NavigationRoutes {
  RootStackParamList = "RootStackParamList",
  Root = "Root",
  OnBoardScreen = "OnBoardScreen",
  HomeTab = "HomeTab",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  OnBoardScreen: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
