import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { icons } from "../../../constants";
import { RootStackNavigationProps } from "../../screens/Screens";
import { tw } from "../../utils";
import Button from "../Form/Button";

const HeaderBack = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Button
      onPress={handlePress}
      containerStyle={tw`w-12 h-12 justify-center items-center border border-transparentBlack1 p-2 rounded-lg`}
      wrappedText
    >
      <Image style={tw`w-5 h-5 `} source={icons.back} />
    </Button>
  );
};

export default HeaderBack;
