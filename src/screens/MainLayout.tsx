import React from "react";
import { Image, Text, View } from "react-native";
import { dummyData, icons } from "../../constants";
import Header from "../components/Header";
import { withDrawer } from "../components/utils";
import { tw } from "../utils";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <View style={tw`p-2`}>
      {/* Header */}
      <Header />
    </View>
  );
};

export default withDrawer(MainLayout);
