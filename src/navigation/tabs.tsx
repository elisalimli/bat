import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text } from "react-native";
import { icons } from "../../constants";
import { useGetColor } from "../hooks";
import { Favourite, Home, Notification, Search } from "../screens";
import CustomTabBar from "./CustomTabBar";
import TabBarCustomButton from "./TabBarCustomButton";

type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Favourite: undefined;
  Coupon: undefined;
};

export type RootStackScreenProps<T extends keyof TabStackParamList> =
  NativeStackScreenProps<TabStackParamList, T>;

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar props={props} />}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          const { search, favourite, notification, coupon, home } = icons;
          // chosing the icon for each route
          switch (route.name) {
            case "Search":
              icon = search;
              break;
            case "Notification":
              icon = notification;
              break;
            case "Coupon":
              icon = coupon;
            case "Favourite":
              icon = favourite;
              break;
            default:
              icon = home;
          }
          return (
            <Image
              source={icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused
                  ? useGetColor("primary")
                  : useGetColor("gray"),
              }}
            />
          );
        },
        tabBarButton: TabBarCustomButton,

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
          borderTopWidth: 0,
          // for android(removing shadow stuff)
          elevation: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Coupon" component={Favourite} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}
