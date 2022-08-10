import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Header from "../../components/Header";
import { tw } from "../../utils";
import HomeSearch from "./HomeSearch";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={tw`p-2 bg-white flex-1`}>
      <Header />
      <HomeSearch />
    </View>
  );
};

export default Home;
