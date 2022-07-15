import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { NewCard } from "../components/NewCard";

export const Home = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content"  />
      <NewCard status="TRUE" title="Hello" content="Bye" />
      <NewCard
        status="FALSE"
        title="El 32 de julio se acaba el mundo"
        content="Bye"
      />
    </ScrollView>
  );
};
