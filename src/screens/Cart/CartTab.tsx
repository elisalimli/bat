import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { dummyData, icons, images } from "../../../constants";
import Button from "../../components/Form/Button";
import Header from "../../components/Header/Header";
import HeaderBack from "../../components/Header/HeaderBack";
import { tw } from "../../utils";

const CartTab = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
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
    </View>
  );
};

export default CartTab;
