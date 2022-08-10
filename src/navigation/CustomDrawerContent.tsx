import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { constants, dummyData, icons, images } from "../../constants";
import { DRAWER_SCREENS } from "../../constants/constants";
import { tw } from "../utils";
import CustomDrawerItem from "./CustomDrawerItem";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
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
              <Image
                source={dummyData.myProfile.profile_image}
                style={tw`w-12 h-12 rounded-xl`}
              />
              <View style={tw`ml-3`}>
                <Text style={tw`h2 text-white2 font-medium`}>
                  {dummyData.myProfile.name}
                </Text>
                <Text style={tw`text-white body4`}>View your profile</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Drawer Items(Screens) */}
        <View style={tw`mt-12 ml-2 flex-1`}>
          {/* @todo maybe loop through this??? */}
          <CustomDrawerItem label={DRAWER_SCREENS.HOME} icon={icons.home} />
          <CustomDrawerItem label={DRAWER_SCREENS.SEARCH} icon={icons.search} />
          <CustomDrawerItem
            label={DRAWER_SCREENS.COUPONS}
            icon={icons.coupon}
          />
          <CustomDrawerItem
            label={DRAWER_SCREENS.NOTIFICATION}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={DRAWER_SCREENS.FAVOURITE}
            icon={icons.favourite}
          />
          <View style={tw`my-4 h-px w-full bg-lightGray1`}></View>
          <CustomDrawerItem
            label={DRAWER_SCREENS.TRACK_YOUR_ORDER}
            icon={icons.location}
          />
          <CustomDrawerItem
            label={DRAWER_SCREENS.MY_WALLET}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={DRAWER_SCREENS.SETTINGS}
            icon={icons.setting}
          />

          <CustomDrawerItem
            label={DRAWER_SCREENS.HELP_CENTER}
            icon={icons.help}
          />
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
