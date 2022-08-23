import React from "react";
import { Text, View } from "react-native";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

const DeliveryStatus = () => {
  return (
    <View style={tw`flex-1`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
      </Header>
    </View>
  );
};

export default DeliveryStatus;
