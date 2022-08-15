import React from "react";
import { Text, View } from "react-native";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

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
      {/* Cards */}
      {/* Footer */}
    </View>
  );
};

export default MyCard;
