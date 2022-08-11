import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { Animated, FlatList, View } from "react-native";
import { constants } from "../../../../constants";
import { tw } from "../../../utils";
import OnBoardingCarouselDots from "./OnBoardingCarouselDots";
import HeaderLogo from "./OnBoardingHeaderLogo";
import OnBoardingList from "./OnBoardingList";
import OnBoardingListItem from "./OnBoardingListItem";

const OnBoarding = () => {
  const scrollX = new Animated.Value(0);

  // useEffect(() => {
  //   listRef?.current?.scrollToIndex({
  //     index,
  //     animated: true,
  //   });
  // }, [index]);
  return (
    <View style={tw`flex-1`}>
      <HeaderLogo />
      <View style={tw`flex-4`}>
        <OnBoardingList scrollX={scrollX} />
      </View>
      <View style={tw`flex-1`}>
        <OnBoardingCarouselDots scrollX={scrollX} />
      </View>
    </View>
  );
};

export default OnBoarding;
