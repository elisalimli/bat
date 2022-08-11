import React, { ReactComponentElement, useRef, useState } from "react";
import { Animated, FlatList } from "react-native";
import { constants } from "../../../../constants";
import { IOnBoardingCarouselSharedProps } from "../../../shared/types/IOnBoardingCarouselSharedProps";
import OnBoardingListItem from "./OnBoardingListItem";

const OnBoardingList: React.FC<IOnBoardingCarouselSharedProps> = ({
  scrollX,
}) => {
  const listRef = useRef<FlatList>();
  const [index, setIndex] = useState(0);

  return (
    <Animated.FlatList
      ref={listRef as React.LegacyRef<Animated.FlatList>}
      initialScrollIndex={index}
      data={constants.onboarding_screens}
      renderItem={(props) => (
        <OnBoardingListItem ref={listRef as any} item={props.item} />
      )}
      keyExtractor={(item) => `onboarding-${item.id}`}
      horizontal
      // snapToAlignment={"center"}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX as any } } }],
        { useNativeDriver: false }
      )}
    />
  );
};

export default OnBoardingList;
