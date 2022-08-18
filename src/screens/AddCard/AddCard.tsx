import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { constants, dummyData, images } from "../../../constants";
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
      <View style={tw`p-2`}>
        {/* Card Icon */}
        <ImageBackground
          source={images.card}
          style={tw`w-full h-[200px] overflow-hidden rounded-lg`}
        >
          <Image
            source={dummyData.allCards[0].icon}
            resizeMode="contain"
            style={tw`absolute right-5  w-[40px] h-[80px]`}
          />
        </ImageBackground>
      </View>
      <View style={tw`flex-1 bg-red`}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default AddCard;
