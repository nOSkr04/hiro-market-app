import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const HomeTab = memo(() => {
  return (
    <View>
      <Text>HomeTab</Text>
    </View>
  );
});

HomeTab.displayName = "HomeTab";

export { HomeTab };

const styles = StyleSheet.create({});
