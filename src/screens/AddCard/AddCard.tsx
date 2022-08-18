import React from "react";
import { Image, Text, View } from "react-native";
import { images } from "../../../constants";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

const AddCard = () => {
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
      <Image
        source={images.card}
        style={tw`w-full h-1/3`}
        resizeMode="contain"
      />
      <View style={tw`flex-1 bg-red`}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default AddCard;
