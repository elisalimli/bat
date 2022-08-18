import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/Form/Button";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import { RootStackNavigationProps } from "../Screens";

interface MyCardFooterProps {}

const MyCardFooter = (props: MyCardFooterProps) => {
  const navigation = useNavigation<RootStackNavigationProps>();
  const { selectedCard } = useCardsStore();
  const isDisabled = selectedCard === null;
  return (
    <Button
      onPress={() => navigation.push("AddCard")}
      disabled={isDisabled}
      containerStyle={[isDisabled && tw`bg-transparentPrimary`]}
      variant="primary"
    >
      Add
    </Button>
  );
};

export default MyCardFooter;
