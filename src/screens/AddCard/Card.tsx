import { useFormikContext } from "formik";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { images } from "../../../constants";
import useCardsStore from "../../store/useCardsStore";
import { tw } from "../../utils";
import CardExpireDate from "./CardExpireDate";
import CardInfo from "./CardInfo";

interface CardProps {}

const Card = (props: CardProps) => {
  const { selectedCard } = useCardsStore();

  return (
    <View style={tw`p-2`}>
      {/* Card Icon */}
      <ImageBackground
        source={images.card}
        style={tw`w-full h-[200px] overflow-hidden rounded-lg`}
      >
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={tw`absolute right-5  w-[40px] h-[80px]`}
        />
      </ImageBackground>
      <CardInfo />
      <CardExpireDate />
    </View>
  );
};

export default Card;
