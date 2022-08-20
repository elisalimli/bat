import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { images } from "../../../constants";
import { HeaderDrawer } from "../../components/Header";
import Header from "../../components/Header/Header";
import HideKeyboard from "../../components/HideKeyboard";
import { tw } from "../../utils";
import HomeFoodCard from "./FoodCard/HomeFoodCard";
import HomeSearch from "./HomeSearch";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<any>();

  return (
    <HideKeyboard>
      <View style={tw`p-2 bg-white flex-1`}>
        {/* Header */}
        <Header>
          <Header.Left>
            <HeaderDrawer />
          </Header.Left>
          <Header.Title>HOME</Header.Title>
          <Header.Right>
            <Image source={images.profile} style={tw`w-12 h-12 rounded-lg`} />
          </Header.Right>
        </Header>
        <HomeSearch />
        <HomeFoodCard />
      </View>
    </HideKeyboard>
  );
};

export default Home;
