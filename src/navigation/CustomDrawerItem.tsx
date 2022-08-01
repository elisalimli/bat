import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { tw } from "../utils";

type CustomDrawerItemProps = {
  icon: ImageSourcePropType;
  label: string;
} & TouchableOpacityProps;

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  icon,
  label,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[tw`flex-row  items-center h-11`]}>
      <Image source={icon} style={tw`w-5 h-5 mr-4 tint-white`} />

      <Text style={tw`h4 text-white`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
