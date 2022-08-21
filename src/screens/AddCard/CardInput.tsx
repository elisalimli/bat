import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MaskInput, { Masks } from "react-native-mask-input";
import { icons } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { tw } from "../../utils";

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
        mask={Masks.CREDIT_CARD}
      />
    );
  }
  return (
    <FormInput
      keyboardType="number-pad"
      maskedInput={renderInput}
      label="Card number"
      suffixComponent={
        <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
      }
    />
  );
};

export default CardInput;
