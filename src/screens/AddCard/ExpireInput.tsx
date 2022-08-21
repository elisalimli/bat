import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MaskInput, { Mask, Masks } from "react-native-mask-input";
import { icons } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { tw } from "../../utils";

// 17/07/2022 -> 07/22
const DATE_MMYY: Mask = (text = "") => {
  const cleanText = text.replace(/\D+/g, "");

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(0) === "0") {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === "3") {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(2) === "0") {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === "1") {
    secondDigitMonthMask = /[012]/;
  }

  return [/[0-3]/, secondDigitDayMask, "/", /[1-9]/, /[1-9]/];
};

const ExpireInput = () => {
  function renderInput() {
    const [expireDate, setExpireDate] = React.useState("");

    return (
      <MaskInput
        keyboardType="number-pad"
        placeholder="07/25"
        value={expireDate}
        onChangeText={(masked, unmasked) => {
          setExpireDate(masked); // you can use the unmasked value as well

          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999 9999
          console.log(unmasked); // 99999999999
        }}
        mask={DATE_MMYY}
      />
    );
  }

  return (
    <FormInput
      containerStyle={tw`flex-1 mr-4`}
      keyboardType="number-pad"
      maskedInput={renderInput}
      label="Expire Date"
      placeholder="07/25"
      suffixComponent={
        <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
      }
    />
  );
};

export default ExpireInput;
