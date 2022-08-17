import React from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils";

interface IHeaderProps {
  Left: React.FC<{}>;
  Title: React.FC<{}>;
  Right: React.FC<{}>;
}

const Header: React.FC & IHeaderProps = ({ children }) => (
  <View style={tw`flex-row items-center justify-between px-4 py-2`}>
    {children}
  </View>
);
const Left: React.FC = ({ children }) => (
  <View style={tw`flex-1 items-start`}>{children}</View>
);
const Title: React.FC = ({ children }) => (
  <Text style={tw`body2 flex-1 text-center`}>{children}</Text>
);
const Right: React.FC = ({ children }) => (
  <View style={tw`flex-1 items-end`}>{children}</View>
);

Header.Left = Left;
Header.Title = Title;
Header.Right = Right;

export default Header;
