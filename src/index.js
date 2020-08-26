import React from "react";
import { StatusBar } from "react-native";
import App from "./App";

export default function Index() {
  return (
    <>
      <App />
      <StatusBar barStyle="light-content" backgroundColor="#f5f5f5" />
    </>
  );
}
