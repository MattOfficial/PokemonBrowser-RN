import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

export default function App() {

  let displayScreen = <HomeScreen />

  return (
    <>
      <Header title="Pokemon" />
      {displayScreen}
    </>
  );
}
