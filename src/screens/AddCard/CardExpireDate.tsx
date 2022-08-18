import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { tw } from "../../utils";

interface CardExpireDateProps {}

const CardExpireDate = (props: CardExpireDateProps) => {
  return (
    <View style={tw`absolute bottom-5 right-5`}>
      <Text style={tw`text-white body4 font-semi-bold`}>10/25</Text>
    </View>
  );
};

export default CardExpireDate;
