import React from "react";
import { View } from "react-native";
import { tw } from "../../utils";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

const foods = [];

const CartTab = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <CartHeader />
      <CartList />
    </View>
  );
};

export default CartTab;
