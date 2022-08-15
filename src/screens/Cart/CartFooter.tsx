import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/Form/Button";
import { tw } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
import { useGetColor } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../Screens";

const CartFooter = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <View style={tw`flex-1`}>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        // Button Linear Gradient
        colors={[useGetColor("transparent"), useGetColor("lightGray2")]}
        style={{ height: 50 }}
      />
      {/* <LinearGradient x1={0} y1={0} x2={0} y2={1} /> */}
      {/* Order Details */}
      <View style={tw`p-4 flex-1`}>
        <View style={tw`flex-1`}>
          {/* Subtotal */}
          <View style={tw`flex-row justify-between mb-1`}>
            <Text style={tw`body3`}>Subtotal</Text>
            <Text style={tw`h3`}>$45.97</Text>
          </View>
          {/* Shipping fee */}
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`body3`}>Shipping fee</Text>
            <Text style={tw`h3`}>$0.00</Text>
          </View>
        </View>
        <View>
          {/* Total */}
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`h2`}>Total</Text>
            <Text style={tw`h2`}>$45.97</Text>
          </View>
          <Button onPress={() => navigation.push("MyCard")} variant="primary">
            Place your order
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CartFooter;
