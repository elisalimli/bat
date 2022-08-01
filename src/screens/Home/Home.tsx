import React from "react";
import { Image, Text, View } from "react-native";
import Header from "../../components/Header";
import { withDrawer } from "../../components/utils";
import { tw } from "../../utils";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={tw`p-2`}>
      {/* Header */}
      <Header />
    </View>
  );
};

export default withDrawer(Home);
