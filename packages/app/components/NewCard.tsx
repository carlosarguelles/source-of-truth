import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge, Status } from "./Badge";

export const NewCard: React.FC<{
  title: string;
  content: string;
  status: Status
}> = ({ title, content, status }) => {
  return (
    <View style={styles.container}>
      <Badge status={status} />
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
