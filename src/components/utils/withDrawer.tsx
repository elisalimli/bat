import { useDrawerProgress } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import {
  Animated as NativeAnimated,
  Dimensions,
  Image,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { interpolateNode } from "react-native-reanimated";

import { constants, WINDOW } from "../../../constants";
import { useGetColor } from "../../hooks";
import useTabStore from "../../store/useTabStore";
import { tw } from "../../utils";

const SelectedTab = ({ id, label, icon }) => (
  <TouchableOpacity
    key={`bottom-tab-${id}`}
    style={
      [
        tw`flex-row items-center`,
        {
          width: (WINDOW.width / 5) * 1.5,
        },
      ]
      // selectedTabId === id && tw``,
    }
  >
    <Image source={icon} style={tw`w-5 h-5 tint-white2 mr-2`} />
    <Text style={tw`text-white body4`}>{label}</Text>
  </TouchableOpacity>
);

const BottomBar = () => {
  const { selectedTabId, setSelectedTabId } = useTabStore();
  const [translateX] = useState(new NativeAnimated.Value(0));
  useEffect(() => {
    NativeAnimated.spring(translateX, {
      toValue: (selectedTabId * (WINDOW.width - (WINDOW.width / 5) * 1.5)) / 4,
      useNativeDriver: true,
    }).start();
  }, [selectedTabId]);

  return (
    <View style={tw`py-3 bg-white2 border-t border-transparentBlack1 w-full`}>
      <View style={tw`flex-row items-center w-full px-4`}>
        <NativeAnimated.View
          style={[
            {
              position: "absolute",

              transform: [
                {
                  translateX,
                },
              ],
              backgroundColor: useGetColor("primary"),
              height: 30,
              width: (WINDOW.width / 5) * 1.5,
              borderRadius: 30,
            },
          ]}
        />
        {constants.bottom_tabs.map(({ id, label, icon }) =>
          selectedTabId === id ? (
            <SelectedTab icon={icon} id={id} label={label} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setSelectedTabId(id);
              }}
              key={`bottom-tab-${id}`}
              style={[
                tw`flex-row items-center flex-1 `, // selectedTabId === id && tw``,
                {
                  width: (WINDOW.width - (WINDOW.width / 5) * 1.5) / 4,
                },
              ]}
            >
              <Image
                source={icon}
                style={tw`w-5 h-5 tint-transparentBlack7 mr-2`}
              />
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};

// drawer scale and border radius animation
export default function withDrawer(WrappedComponent: React.FC) {
  const HOC = () => {
    const progress = useDrawerProgress();

    const scale = interpolateNode(progress as any, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });

    const borderRadius = interpolateNode(progress as any, {
      inputRange: [0, 1],
      outputRange: [0, WINDOW.width * 0.1],
    });

    const padding = interpolateNode(progress as any, {
      inputRange: [0, 1],
      outputRange: [0, WINDOW.width * 0.05],
    });

    return (
      <Animated.View
        style={[
          tw`bg-white flex-1`,
          {
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            padding,
            transform: [{ scale }],
          },
        ]}
      >
        <View style={tw`flex-1`}>
          <WrappedComponent />
        </View>

        <BottomBar />
      </Animated.View>
    );
  };

  return HOC;
}
