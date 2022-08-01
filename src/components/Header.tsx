import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dummyData, icons } from "../../constants";
import { useDrawerStore } from "../store";
import { tw } from "../utils";

const Header = () => {
  const { selectedTab } = useDrawerStore();
  const navigation = useNavigation<any>();

  const handlePressMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={tw`flex-row items-center justify-between px-4 py-2`}>
      {/* Menu Icon */}
      <TouchableOpacity
        onPress={handlePressMenu}
        style={tw`w-12 h-12 justify-center items-center border border-transparentBlack1 p-2 rounded-lg`}
      >
        <Image style={tw`w-5 h-5`} source={icons.menu} />
      </TouchableOpacity>
      {/* Screen name */}
      <View>
        <Text style={tw`body2 font-semi-bold`}>
          {selectedTab.toUpperCase()}
        </Text>
      </View>
      <View>
        <Image
          source={dummyData.myProfile.profile_image}
          style={tw`w-12 h-12 rounded-xl`}
        />
      </View>
    </View>
  );
};

export default Header;
