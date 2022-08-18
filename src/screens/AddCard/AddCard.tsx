import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { constants, dummyData, icons, images } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import Card from "./Card";
import MaskInput from "react-native-mask-input";

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

function CreditCardInput() {
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
const AddCard = () => {
  const { selectedCard } = useCardsStore();
  return (
    <View style={tw`flex-1 bg-white p-2`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>ADD NEW CARD</Header.Title>
        <Header.Right>
          <View style={tw`mr-2`}></View>
        </Header.Right>
      </Header>
      {/* Credit card */}
      <Card />
      <View style={tw`flex-1 `}>
        <FormInput
          keyboardType="number-pad"
          maskedInput={<CreditCardInput />}
          label="Card number"
          placeholder="1234123412341234"
          suffixComponent={
            <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
          }
        />
        <FormInput
          label="Email"
          placeholder="john@example.com"
          suffixComponent={
            <Image style={tw`w-5 h-5 tint-red`} source={icons.cancel} />
          }
        />
      </View>
    </View>
  );
};

export default AddCard;
