import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Search } from "./screens/Search";
import { Home } from "./screens/Home";
import { Box, NativeBaseProvider } from "native-base";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box safeArea>hello</Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
