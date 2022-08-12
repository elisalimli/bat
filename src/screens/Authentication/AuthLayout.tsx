import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { tw } from "../../utils";

interface IAuthLayoutProps {}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return <View style={tw`flex-1`}>{children}</View>;
};

export default AuthLayout;
