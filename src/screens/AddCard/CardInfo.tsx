import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { tw } from "../../utils";

const CardInfo = () => {
  return (
    <View style={tw`absolute bottom-5 left-5`}>
      <Text style={tw`text-white h4`}>Ali Salimli</Text>
      <Text style={tw`text-white body4`}>1234 1234 1234 1234</Text>
    </View>
  );
};

export default CardInfo;
