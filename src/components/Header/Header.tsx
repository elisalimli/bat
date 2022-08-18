import React from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils";

interface IHeaderProps {
  Left: React.FC<{}>;
  Title: React.FC<{}>;
  Right: React.FC<{}>;
}

const Header: React.FC & IHeaderProps = ({ children }) => (
  <View style={tw`flex-row items-center justify-between py-2`}>{children}</View>
);
const Left: React.FC = ({ children }) => (
  <View style={tw`ml-2`}>{children}</View>
);
const Title: React.FC = ({ children }) => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text style={tw`h3 font-medium`}>{children}</Text>
  </View>
);
const Right: React.FC = ({ children }) => (
  <View style={tw`mr-2`}>{children}</View>
);

Header.Left = Left;
Header.Title = Title;
Header.Right = Right;

export default Header;
