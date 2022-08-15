import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/Form/Button";
import { tw } from "../../utils";

const CartFooter = () => {
  return (
    <View style={tw`p-4 flex-1 border-t border-lightGray1`}>
      <View style={tw`flex-1`}>
        {/* Subtotal */}
        <View style={tw`flex-row justify-between mb-1`}>
          <Text style={tw`body4`}>Subtotal</Text>
          <Text style={tw`h4 font-bold`}>$45.97</Text>
        </View>
        {/* Shipping fee */}
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`body4`}>Shipping fee</Text>
          <Text style={tw`h4 font-bold`}>$0.00</Text>
        </View>
      </View>
      <View>
        {/* Total */}
        <View style={tw`flex-row justify-between mb-4`}>
          <Text style={tw`h2`}>Total</Text>
          <Text style={tw`h2`}>$45.97</Text>
        </View>
        <Button variant="primary">Place your order</Button>
      </View>
    </View>
  );
};

export default CartFooter;
