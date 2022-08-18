import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { constants, dummyData, icons, images } from "../../../constants";
import FormInput from "../../components/Form/FormInput";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import Card from "./Card";
import CardInput from "./CardInput";
import RememberDetails from "./RememberDetails";
const AddCard = () => {
  const { selectedCard } = useCardsStore();
  return (
    <View style={tw`flex-1 bg-white py-2 px-4`}>
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
        {/* Masked Card Input */}
        <CardInput />
        <FormInput
          label="Cardholder name"
          placeholder="john"
          suffixComponent={
            <Image style={tw`w-5 h-5 tint-red`} source={icons.correct} />
          }
        />
        <View style={tw`flex-row mt-2`}>
          <FormInput
            containerStyle={tw`flex-1 mr-4`}
            label="Cardholder name"
            placeholder="john"
            suffixComponent={
              <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
            }
          />
          <FormInput
            containerStyle={tw`flex-1`}
            label="Cardholder name"
            placeholder="john"
            suffixComponent={
              <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
            }
          />
        </View>
        {/* Remember this card details */}
        <RememberDetails />
      </View>
    </View>
  );
};

export default AddCard;
