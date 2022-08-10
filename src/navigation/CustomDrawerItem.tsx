import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useGetColor } from "../hooks";
import { useDrawerStore } from "../store";
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
  const { selectedTab, setSelectedTab } = useDrawerStore();
  const isFocused = selectedTab === label;
  const { navigate } = useNavigation();

  const handlePress = () => {
    setSelectedTab(label);
    navigate(label);
  };
  return (
    <TouchableOpacity
      {...props}
      style={[
        tw`flex-row items-center h-11 rounded-2xl py-2 px-4`,
        {
          backgroundColor: isFocused ? useGetColor("transparentBlack1") : null,
        },
      ]}
      onPress={handlePress}
    >
      <Image source={icon} style={tw`w-5 h-5 mr-4 tint-white`} />

      <Text style={tw`h4 text-white`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
