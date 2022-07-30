import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Favourite, Home } from "../screens";
import { tw } from "../utils";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import MainLayout from "../screens/MainLayout";

interface CustomDrawerContentProps {}

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: CustomDrawerContentProps) => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          // for removing shadown
          overlayColor: "transparent",
          drawerStyle: tw`w-4/6 pr-5 flex-1 bg-transparent`,
          sceneContainerStyle: tw`bg-transparent`,
        }}
        // drawerContent={(prop) => <CustomDrawerContent {...prop} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="MainLayout" component={MainLayout}></Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
