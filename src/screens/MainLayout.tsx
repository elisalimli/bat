import React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tw } from "../utils";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <View>
      <Text>MainLayout</Text>
    </View>
  );
};

export default MainLayout;
