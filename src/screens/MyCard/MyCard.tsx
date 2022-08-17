import React from "react";
import { Text, View } from "react-native";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";
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
          <Text></Text>
        </Header.Right>
      </Header>
      <View style={tw`py-2 px-4`}>
        {/* Cards */}
        <MyCardList />
        {/* Footer */}
      </View>
    </View>
  );
};

export default MyCard;
