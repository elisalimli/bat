import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import HideKeyboard from "../../components/HideKeyboard";
import { tw } from "../../utils";
import HomeFoodCard from "./FoodCard/HomeFoodCard";
import HomeSearch from "./HomeSearch";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <HideKeyboard>
      <View style={tw`p-2 bg-white flex-1`}>
        <Header />
        <HomeSearch />
        <HomeFoodCard />
      </View>
    </HideKeyboard>
  );
};

export default Home;
