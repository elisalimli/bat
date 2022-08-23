import React from "react";
import { Text, View } from "react-native";
import { constants } from "../../../constants";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

const DeliveryStatus = () => {
  return (
    <View style={tw`flex-1`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>Delivery Status</Header.Title>
      </Header>
      {/* @todo create a container */}
      <View style={tw`py-4 px-8`}></View>
    </View>
  );
};

export default DeliveryStatus;
