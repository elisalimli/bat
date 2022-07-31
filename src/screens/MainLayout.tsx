import React from "react";
import { Text } from "react-native";
import { withDrawer } from "../components/utils";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return <Text>MainLayout</Text>;
};

export default withDrawer(MainLayout);
