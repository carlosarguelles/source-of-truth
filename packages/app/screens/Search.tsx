import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Buscar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
