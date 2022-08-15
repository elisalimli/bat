import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { icons } from "../../../../constants";
import { tw } from "../../../utils";

interface RightActionsProps {
  onClick: () => void;
}

const RightActions: React.FC<RightActionsProps> = ({ onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={tw`w-20 justify-center items-end bg-primary rounded-tr-lg rounded-br-lg`}
    >
      <Image source={icons.delete_icon} style={tw`tint-white w-8 h-8 mr-4`} />
    </TouchableOpacity>
  );
};

export default RightActions;

const styles = StyleSheet.create({
  container: {},
});
