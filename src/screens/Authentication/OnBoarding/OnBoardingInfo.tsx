import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IOnBoardingScreen } from "../../../../constants/constants";
import { tw } from "../../../utils";

const OnBoardingInfo: React.FC<IOnBoardingScreen> = ({
  title,
  description,
}) => {
  return (
    <View style={tw`justify-center items-center`}>
      {/* Title */}
      <Text style={tw`mt-18 h1 font-medium`}>{title}</Text>
      {/* Description */}
      <Text style={tw`mx-4 my-2 body4 text-gray text-center`}>
        {description}
      </Text>
    </View>
  );
};

export default OnBoardingInfo;
