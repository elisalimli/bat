import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useRef } from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import { constants, WINDOW } from "../../../../constants";
import { useOnBoardingStore } from "../../../store";
import { tw } from "../../../utils";
import OnBoardingCarouselDots from "./OnBoardingCarouselDots";
import HeaderLogo from "./OnBoardingHeaderLogo";
import OnBoardingList from "./OnBoardingList";

const OnBoarding = () => {
  const scrollX = new Animated.Value(0) as { _value: number } & Animated.Value;
  const listRef = useRef<FlatList>();
  const { currentIndex } = useOnBoardingStore();

  const navigation = useNavigation();

  // On Press Functions
  const handleNavigationToSignIn = () => navigation.replace("SignIn");

  const handlePress = () => {
    const position = Math.ceil(scrollX._value / WINDOW.width);

    // if index is
    // 0 -> 1
    // 1 -> 2
    // 2 -> do not nothing

    // if position is the last element then do nothing
    if (position === constants.onboarding_screens?.length - 1) return;
    // scrolling to the next element
    listRef?.current?.scrollToIndex({
      index: position + 1,
      animated: true,
    });
  };

  return (
    <View style={tw`flex-1`}>
      <HeaderLogo />
      <View style={tw`flex-4`}>
        <OnBoardingList ref={listRef as any} scrollX={scrollX} />
      </View>
      <View style={tw`flex-1`}>
        <View style={tw`flex-1`}>
          <OnBoardingCarouselDots scrollX={scrollX} />
        </View>
        <View style={tw`flex-row mx-4 mb-4`}>
          {currentIndex == constants?.onboarding_screens?.length - 1 ? (
            <TouchableOpacity
              style={tw`flex-1 justify-center items-center bg-primary rounded-lg py-4`}
              onPress={handleNavigationToSignIn}
            >
              <Text style={tw`text-white h4`}>Let's Get Started</Text>
            </TouchableOpacity>
          ) : (
            <Fragment>
              <TouchableOpacity
                onPress={handleNavigationToSignIn}
                style={tw`flex-1 justify-center`}
              >
                <Text style={tw`text-gray h4`}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 justify-center items-center bg-primary rounded-lg py-4`}
                onPress={handlePress}
              >
                <Text style={tw`text-white h4`}>Next</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
