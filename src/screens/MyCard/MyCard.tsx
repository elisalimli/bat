import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/Form/Button";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import { RootStackNavigationProps } from "../Screens";
import MyCardFooter from "./MyCardFooter";
import MyCardList from "./MyCardList";

const MyCard = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>MY CARDS</Header.Title>
        <Header.Right>
          <View style={tw`mr-6`}></View>
        </Header.Right>
      </Header>
      <View style={tw`flex-1 py-2 px-4`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 mb-8`}
        >
          {/* Card Header */}
          <Text style={tw`h3 ml-1 my-4`}>Add new card</Text>
          <MyCardList />
        </ScrollView>
        {/* Footer */}
        <MyCardFooter />
      </View>
    </View>
  );
};

export default MyCard;
