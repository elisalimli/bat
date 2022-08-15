import React from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

const foods = [];

const CartTab = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-2`}>
        <CartHeader />
        <CartList />
      </View>
      <View style={tw`flex-1 `}>
        <CartFooter />
      </View>
    </View>
  );
};

export default CartTab;
