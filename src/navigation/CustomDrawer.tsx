import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import { DRAWER_SCREENS } from "../../constants/constants";
import { Home, Notification } from "../screens";
import Settings from "../screens/Settings/Settings";
import { tw } from "../utils";
import CustomDrawerContent from "./CustomDrawerContent";
import Tabs from "./tabs";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={tw`flex-1`}>
      <Drawer.Navigator
        // for animation @todo find a better way(check reanimated 2 implementation??)
        useLegacyImplementation
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          // for removing shadown
          overlayColor: "transparent",
          drawerStyle: tw`w-4/6 pr-5 flex-1 bg-primary`,
          sceneContainerStyle: tw`bg-transparent`,
        }}
        // drawerContent={(prop) => <CustomDrawerContent {...prop} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name={DRAWER_SCREENS.SETTINGS} component={Settings} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
