// for setting up screens
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { useGetColor } from "../hooks";
import CustomDrawer from "../navigation/CustomDrawer";
import { TabStackParamList } from "../navigation/tabs";
import useAuthStore from "../store/useAuthStore";
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
} from "./Authentication";

export type RootStackParamList = {
  MainLayout: undefined;
} & AuthStackParamList &
  TabStackParamList;

export type AuthStackParamList = {
  OnBoarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Otp: undefined;
};

// for useNavigation
export type RootStackNavigationProps = StackNavigationProp<RootStackParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const RootStack = createStackNavigator<RootStackParamList>();

const Screens = () => {
  const { auth } = useAuthStore();
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
        initialRouteName="MainLayout"
      >
        {auth ? (
          <RootStack.Screen name="MainLayout" component={CustomDrawer} />
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="OnBoarding" component={OnBoarding} />

            <RootStack.Screen name="SignIn" component={SignIn} />

            <RootStack.Screen name="SignUp" component={SignUp} />

            <RootStack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
            />

            <RootStack.Screen name="Otp" component={Otp} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
