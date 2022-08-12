import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { images, WINDOW } from "../../../constants";
import { tw } from "../../utils";
import HeaderLogo, { Logo } from "./OnBoarding/OnBoardingHeaderLogo";

interface IAuthLayoutProps {
  title: string;
  subTitle: string;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <View style={tw`flex-1 px-4 py-4 bg-white`}>
      {/* Logo */}
      <View style={tw`justify-center items-center`}>
        <Logo />
      </View>
      {/* Header & Subtitle */}
      <View style={tw`justify-center items-center mt-8`}>
        <Text style={tw`h1`}>{title}</Text>
        <Text style={tw`text-gray body4 mt-1`}>{subTitle} </Text>
      </View>
      <View style={tw`flex-1 flex-col mt-8`}>{children}</View>
    </View>
  );
};

export default AuthLayout;
