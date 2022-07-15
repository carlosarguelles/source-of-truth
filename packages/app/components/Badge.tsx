import React from "react";
import { ColorValue, StyleSheet, Text, View } from "react-native";

export type Status = "TRUE" | "FALSE" | "NOT_VERIFIED" | "PENDING";

export const StatusText: Record<Status, string> = {
  TRUE: "Verdad",
  FALSE: "Falso",
  PENDING: "Pendiente",
  NOT_VERIFIED: "No verificada",
};

export const StatusColors: Record<Status, ColorValue> = {
  TRUE: "yellowgreen",
  FALSE: "red",
  PENDING: "gray",
  NOT_VERIFIED: "black",
};

export const Badge: React.FC<{
  status: Status;
}> = ({ status }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: StatusColors[status],
        },
      ]}
    >
      <Text>{StatusText[status]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 100,
  },
});
