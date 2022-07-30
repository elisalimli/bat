import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Home } from "../screens";
import { tw } from "../utils";
import { createDrawerNavigator } from "@react-navigation/drawer";

interface CustomDrawerProps {}

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: CustomDrawerProps) => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
