import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Image, View } from "react-native";
import { icons } from "../../../constants";
import Button from "../../components/Form/Button";
import FormInput from "../../components/Form/FormInput";
import { Header, HeaderBack } from "../../components/Header";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import { RootStackNavigationProps } from "../Screens";
import Card from "./Card";
import RememberDetails from "./RememberDetails";
// Formik x React Native example
import { Formik } from "formik";
import { Mask, Masks } from "react-native-mask-input";
import type { IAddCardFormValues } from "./AddCard.types";
import { MY_MASK } from "./AddCardMasks";

export const MyReactNativeForm = () => {
  const initialValues: IAddCardFormValues = {
    cardholder: "",
    card_number: "",
    expire: "",
    cvv: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({}) => (
        <Fragment>
          <Card />
          <View style={tw`mt-2`}>
            {/* Card */}
            <FormInput
              name="card_number"
              label="Card number"
              keyboardType="number-pad"
              suffixComponent={
                <Image style={tw`w-5 h-5 tint-green`} source={icons.correct} />
              }
              maskedInputProps={{
                value: "",
                keyboardType: "number-pad",
                placeholder: "1234 1234 1234 1234",
                mask: Masks.CREDIT_CARD,
              }}
            />
            <FormInput
              name="cardholder"
              label="Cardholder name"
              placeholder="John"
              autoCapitalize="words"
              autoComplete="name"
              suffixComponent={
                <Image style={tw`w-5 h-5 tint-red`} source={icons.cancel} />
              }
            />
            <View style={tw`flex-row mt-2`}>
              <FormInput
                name="expire"
                containerStyle={tw`flex-1 mr-4`}
                keyboardType="number-pad"
                maskedInputProps={{
                  value: "",
                  keyboardType: "number-pad",
                  placeholder: "07/25",
                  mask: MY_MASK.DATE_MMYY,
                }}
                label="Expire Date"
                suffixComponent={
                  <Image
                    style={tw`w-5 h-5 tint-green`}
                    source={icons.correct}
                  />
                }
              />
              <FormInput
                name="cvv"
                containerStyle={tw`flex-1`}
                keyboardType="number-pad"
                maskedInputProps={{
                  value: "",
                  keyboardType: "number-pad",
                  placeholder: "123",
                  mask: MY_MASK.CVV_MASK,
                }}
                label="CVV"
                suffixComponent={
                  <Image
                    style={tw`w-5 h-5 tint-green`}
                    source={icons.correct}
                  />
                }
              />
            </View>
          </View>
        </Fragment>
      )}
    </Formik>
  );
};

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
        {/* <Card /> */}
        <MyReactNativeForm />
        {/* Remember this card details */}
        <RememberDetails />
        <View style={tw`flex-1 justify-end mb-1`}>
          <Button
            variant="primary"
            textStyle={tw`text-base`}
            onPress={() => navigation.replace("Success")}
          >
            Done
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddCard;
