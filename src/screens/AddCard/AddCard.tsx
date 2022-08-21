import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { constants, dummyData, icons, images } from "../../../constants";
import Button from "../../components/Form/Button";
import FormInput from "../../components/Form/FormInput";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import { RootStackNavigationProps, RootStackParamList } from "../Screens";
import Card from "./Card";
import CardInput from "./CardInput";
import CVVInput from "./CVVInput";
import ExpireInput from "./ExpireInput";
import RememberDetails from "./RememberDetails";
const AddCard = () => {
  const { selectedCard } = useCardsStore();
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <View style={tw`flex-1 bg-white py-2`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>ADD NEW CARD</Header.Title>
        <Header.Right>
          <View style={tw`mr-2`}></View>
        </Header.Right>
      </Header>
      <View style={tw`px-4 flex-1`}>
        {/* Credit card */}
        <Card />
        {/* Masked Card Input */}
        <CardInput />
        <FormInput
          label="Cardholder name"
          placeholder="John"
          autoCapitalize="words"
          autoComplete="name"
          suffixComponent={
            <Image style={tw`w-5 h-5 tint-red`} source={icons.cancel} />
          }
        />

        <View style={tw`flex-row mt-2`}>
          {/* Masked Input */}
          <ExpireInput />
          <CVVInput />
        </View>
        {/* Remember this card details */}
        <RememberDetails />
        <View style={tw`flex-1 justify-end mb-1`}>
          <Button
            variant="primary"
            textStyle={tw`text-base`}
            onPress={() => navigation.navigate("Success")}
          >
            Done
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddCard;
