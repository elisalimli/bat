import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { dummyData } from "../../../constants";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

const CartHeader = () => {
  return (
    <Header>
      <Header.Left>
        <HeaderBack />
      </Header.Left>
      {/* Screen name */}
      <Header.Title>MY CART</Header.Title>
      <Header.Right>
        {/* Profile image */}
        <Image
          source={dummyData.myProfile.profile_image}
          style={tw`w-12 h-12 rounded-xl`}
        />
      </Header.Right>
    </Header>
  );
};

export default CartHeader;
