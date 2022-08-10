import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { icons, images } from "../../../constants";
import { tw } from "../../utils";

interface HomeSearchProps {}

const HomeSearch = () => {
  const iconStyle = tw`tint-black w-5 h-5`;
  return (
    <View style={tw`flex-row mx-4 my-3 items-center`}>
      <TouchableOpacity>
        <Image source={icons.search} style={iconStyle} />
      </TouchableOpacity>
      <TextInput
        style={tw`bg-lightGray2 rounded-2xl flex-1 mx-2 py-1 px-4`}
        placeholder="Search food"
      />
      <TouchableOpacity>
        <Image source={icons.filter} style={iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeSearch;
