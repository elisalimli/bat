import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { constants, icons, images } from "../../constants";
import { tw } from "../utils";
import CustomDrawerItem from "./CustomDrawerItem";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  console.log("pprops content", props);
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={tw`flex-1`}>
      {/* <DrawerItemList {...props} /> */}
      <View style={tw`pl-4 flex-1`}>
        <View>
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
        {/* Drawer Items(Screens) */}
        <View style={tw`mt-12 ml-4 flex-1`}>
          {/* @todo maybe loop through this??? */}
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          <View style={tw`my-4 h-px w-full bg-lightGray1`}></View>
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a friend" icon={icons.profile} />
          <CustomDrawerItem label="Help center" icon={icons.help} />
        </View>
        <View style={tw`px-4 py-8`}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
      {/* <DrawerItem
        label="Help"
        onPress={() => navigation.navigate("MainLayout")}
      /> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
