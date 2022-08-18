import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MaskInput from "react-native-mask-input";
import { icons } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { tw } from "../../utils";

const CREDIT_CARD_INPUT_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const CardInput = () => {
  function renderInput() {
    const [phone, setPhone] = React.useState("");
    console.log("phone", phone);
    return (
      <MaskInput
        keyboardType="number-pad"
        placeholder="1234 1234 1234 1234"
        value={phone}
        onChangeText={(masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well

          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999 9999
          console.log(unmasked); // 99999999999
        }}
        mask={CREDIT_CARD_INPUT_MASK}
      />
    );
  }

  return (
    <FormInput
      keyboardType="number-pad"
      maskedInput={renderInput}
      label="Card number"
      placeholder="1234123412341234"
      suffixComponent={
        <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
      }
    />
  );
};

export default CardInput;

const styles = StyleSheet.create({
  container: {},
});
