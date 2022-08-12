import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useRef } from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import { constants, WINDOW } from "../../../../constants";
import { IScrollX } from "../../../shared/types/IOnBoardingCarouselSharedProps";
import { useOnBoardingStore } from "../../../store";
import { tw } from "../../../utils";
import { RootStackNavigationProps } from "../../Screens";
import OnBoardingCarouselDots from "./OnBoardingCarouselDots";
import OnBoardingFooter from "./OnBoardingFooter";
import HeaderLogo from "./OnBoardingHeaderLogo";
import OnBoardingList from "./OnBoardingList";

const OnBoarding = () => {
  const scrollX = new Animated.Value(0) as IScrollX;
  const listRef = useRef<FlatList>(null);
  const { currentIndex } = useOnBoardingStore();
  return (
    <View style={tw`flex-1`}>
      {/* Logo */}
      <HeaderLogo />
      {/* List */}
      <View style={tw`flex-4`}>
        <OnBoardingList ref={listRef as any} scrollX={scrollX} />
      </View>
      <View style={tw`flex-1`}>
        {/* Dots */}
        <View style={tw`flex-1`}>
          <OnBoardingCarouselDots scrollX={scrollX} />
        </View>
        {/* Footer Buttons */}
        <View style={tw`flex-row mx-4 mb-4`}>
          <OnBoardingFooter
            isLastElement={
              currentIndex == constants?.onboarding_screens?.length - 1
            }
            ref={listRef as any}
            scrollX={scrollX}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
