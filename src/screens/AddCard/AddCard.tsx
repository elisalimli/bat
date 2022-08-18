import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { constants, dummyData, images } from "../../../constants";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import Card from "./Card";

const AddCard = () => {
  const { selectedCard } = useCardsStore();
  return (
    <View style={tw`flex-1 bg-white p-2`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>ADD NEW CARD</Header.Title>
        <Header.Right>
          <View style={tw`mr-2`}></View>
        </Header.Right>
      </Header>
      {/* Credit card */}
      <Card />
      <View style={tw`flex-1 `}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default AddCard;
