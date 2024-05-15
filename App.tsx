import { AppState, AppStateStatus, StatusBar, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { persistor, store } from "./src/store";
import { NavigationContainer } from "./src/navigation/navigation-container";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    NunHeavyBold: require("./src/assets/fonts/Nunito-Black.ttf"),
    NunBold: require("./src/assets/fonts/Nunito-Bold.ttf"),
    NunExtraBold: require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
    NunMedium: require("./src/assets/fonts/Nunito-Medium.ttf"),
    NunThin: require("./src/assets/fonts/Nunito-Regular.ttf"),
    NunLight: require("./src/assets/fonts/Nunito-Light.ttf"),
    NunExtraLight: require("./src/assets/fonts/Nunito-ExtraLight.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);

  if (!fontsLoaded || fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SWRConfig
          value={{
            provider: () => new Map(),
            initFocus(callback) {
              let appState = AppState.currentState;

              const handleAppStateChange = (nextAppState: AppStateStatus) => {
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback();
                }
                appState = nextAppState;
              };

              const subscription = AppState.addEventListener(
                "change",
                handleAppStateChange
              );

              return () => {
                subscription.remove();
              };
            },
          }}
        >
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <GestureHandlerRootView style={styles.container}>
              <NavigationContainer />
              <StatusBar barStyle="dark-content" />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
