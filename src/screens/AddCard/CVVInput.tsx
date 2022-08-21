import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MaskInput, { Mask, Masks } from "react-native-mask-input";
import { icons } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { tw } from "../../utils";

const CVV_MASK = [/[0-9]/, /[0-9]/, /[0-9]/];
const CVVInput = () => {
  function renderInput() {
    const [expireDate, setExpireDate] = React.useState("");

    return (
      <MaskInput
        keyboardType="number-pad"
        placeholder="123"
        value={expireDate}
        onChangeText={(masked, unmasked) => {
          setExpireDate(masked); // you can use the unmasked value as well

          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999 9999
          console.log(unmasked); // 99999999999
        }}
        mask={CVV_MASK}
      />
    );
  }
  return (
    <FormInput
      containerStyle={tw`flex-1 mr-4`}
      keyboardType="number-pad"
      maskedInput={renderInput}
      label="CVV"
      suffixComponent={
        <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
      }
    />
  );
};

export default CVVInput;
