import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Favourite, Home } from "../screens";
import { tw } from "../utils";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import MainLayout from "../screens/MainLayout";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress as any, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress as any, {
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  return (
    <Animated.View
      style={[tw`bg-white flex-1`, [{ transform: [{ scale }], borderRadius }]]}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <MainLayout {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

interface CustomDrawerContentProps {}

// contentComponent: (props) => (
//   <View style={styles.sidebar}>
//     <ScrollView>
//       <DrawerItems
//         {...props}
//         getLabel = {(scene) => (
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>{props.getLabel(scene)}</Text>
//           </View>
//         )}
//       />
//       </ScrollView>
//     </View>
//   )
const CustomDrawer = (props: CustomDrawerContentProps) => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Drawer.Navigator
        // for animation @todo find a better way(check reanimated 2 implementation??)
        useLegacyImplementation
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          // for removing shadown
          overlayColor: "transparent",
          drawerStyle: tw`w-4/6 pr-5 flex-1 bg-transparent`,
          sceneContainerStyle: tw`bg-transparent`,
        }}
        // drawerContent={(prop) => <CustomDrawerContent {...prop} />}
        initialRouteName="MainLayout"
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
