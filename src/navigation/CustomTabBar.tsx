import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { tw } from "../utils";

const CustomTabBar: React.FC<{ props: BottomTabBarProps }> = (props) => {
  return (
    <View>
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 50,
          backgroundColor: "blue",
        }}
      ></View> */}
      <BottomTabBar {...props.props} />
    </View>
  );
};

export default CustomTabBar;
