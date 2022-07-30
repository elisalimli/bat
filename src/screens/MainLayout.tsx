// for setting up screens
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { Home } from ".";
import { useGetColor } from "../hooks";
import CustomDrawer from "../navigation/CustomDrawer";

export type RootStackParamList = {
  Home: undefined;
  Favourite: undefined;
  Cart: undefined;
  Notification: undefined;
  Search: undefined;
};

// for useNavigation
export type RootStackNavigationProps = StackNavigationProp<RootStackParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const MainLayout = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={useGetColor("primary")} />

      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          gestureEnabled: true,
          gestureDirection: "vertical",
          headerShown: false,
          //   headerBackImage: () => <Text style={tw` text-blue-500`}>back</Text>,
        }}
        initialRouteName="Home"
      >
        <RootStack.Screen name="Home" component={CustomDrawer} />
        {/* <RootStack.Screen name="Restaurant" component={Restaurant} /> */}
        {/* <RootStack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainLayout;
