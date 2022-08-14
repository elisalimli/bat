import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { icons } from "../../../constants";
import { tw } from "../../utils";
import Button from "../Form/Button";

const HeaderDrawer = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => navigation.openDrawer();

  return (
    <Button
      onPress={handlePress}
      wrappedText
      containerStyle={tw`w-12 h-12 justify-center items-center border border-transparentBlack1 p-2 rounded-lg`}
    >
      <Image style={tw`w-5 h-5`} source={icons.menu} />
    </Button>
  );
};

export default HeaderDrawer;
