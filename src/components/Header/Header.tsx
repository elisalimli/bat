import React, { Fragment } from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils";

interface IHeaderProps {
  Left: React.FC<{}>;
  Title: React.FC<{}>;
  Right: React.FC<{}>;
}

const Header: React.FC<{ children: React.ReactNode[] | React.ReactNode }> &
  IHeaderProps = ({ children }) => (
  <View style={tw`flex-row items-center justify-between py-2`}>
    {/* Checking if the header exists in only one piece or multiple */}
    {Array.isArray(children) ? (
      <Fragment>
        <View style={tw`flex-1`}>{children[0]}</View>
        <View style={tw`flex-2 items-center justify-center`}>
          {children[1]}
        </View>
        <View style={tw`flex-1 items-end`}>{children[2]}</View>
      </Fragment>
    ) : (
      children
    )}
  </View>
);
const Left: React.FC = ({ children }) => (
  <View style={tw`ml-2`}>{children}</View>
);
const Title: React.FC = ({ children }) => (
  <Text style={tw`h3 font-medium`}>{children}</Text>
);
const Right: React.FC = ({ children }) => (
  <View style={tw`mr-2`}>{children}</View>
);

Header.Left = Left;
Header.Title = Title;
Header.Right = Right;

export default Header;
