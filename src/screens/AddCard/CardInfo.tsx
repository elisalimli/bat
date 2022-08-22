import { useFormikContext } from "formik";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { tw } from "../../utils";
import type { IAddCardFormValues } from "./AddCard.types";
const CardInfo = () => {
  // form values
  const {
    values: { card_number, cardholder },
  } = useFormikContext<IAddCardFormValues>();

  return (
    <View style={tw`absolute bottom-5 left-5`}>
      <Text style={tw`text-white h4`}>{cardholder}</Text>
      <Text style={tw`text-white body4`}>{card_number}</Text>
    </View>
  );
};

export default CardInfo;
