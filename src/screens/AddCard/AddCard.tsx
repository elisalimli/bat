import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { constants, dummyData, icons, images } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import Card from "./Card";
import CardInput from "./CardInput";
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
        {/* Masked Card Input */}
        <CardInput />
        <FormInput
          label="Email"
          placeholder="john@example.com"
          suffixComponent={
            <Image style={tw`w-5 h-5 tint-red`} source={icons.cancel} />
          }
        />
      </View>
    </View>
  );
};

export default AddCard;
