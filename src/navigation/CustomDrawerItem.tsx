import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../../constants";
import { tw } from "../utils";

interface CustomDrawerItemProps {
  icon: ImageSourcePropType;
  label: string;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({ icon, label }) => {
  return (
    <TouchableOpacity style={tw`flex-row  items-center h-11`}>
      <Image source={icon} style={tw`w-5 h-5 mr-4 tint-white`} />

      <Text style={tw`h4 text-white`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
