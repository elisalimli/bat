import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../../constants";
import { tw } from "../utils";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={tw`flex-1`}>
      {/* <DrawerItemList {...props} /> */}
      <View style={tw`p-2`}>
        {/* Close button */}
        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}
        >
          <Image source={icons.cross} style={tw`tint-white w-8 h-8`} />
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity style={tw`mt-8`}>
          <View style={tw`flex-row`}>
            <Image source={images.profile} style={tw`w-12 h-12 rounded-xl`} />
            <View style={tw`ml-3`}>
              <Text style={tw`h2 text-white2 font-medium`}>Ali Salimli</Text>
              <Text style={tw`text-white body4`}>View your profile</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItem
        label="Help"
        onPress={() => navigation.navigate("MainLayout")}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
