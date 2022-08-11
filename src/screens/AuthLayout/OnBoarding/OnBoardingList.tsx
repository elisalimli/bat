import React, { ReactComponentElement, useRef, useState } from "react";
import { Animated, FlatList } from "react-native";
import { constants } from "../../../../constants";
import { IOnBoardingCarouselSharedProps } from "../../../shared/types/IOnBoardingCarouselSharedProps";
import { useOnBoardingStore } from "../../../store";
import OnBoardingListItem from "./OnBoardingListItem";

type IOnBoardingListProps = IOnBoardingCarouselSharedProps;

const OnBoardingList = React.forwardRef<IOnBoardingListProps>(
  ({ scrollX }, ref) => {
    const { setCurrentIndex } = useOnBoardingStore();
    const onViewRef = React.useRef(
      ({ viewableItems }: { viewableItems: any[] }) =>
        setCurrentIndex(viewableItems[0]?.index)
    );
    const viewConfigRef = React.useRef({
      viewAreaCoveragePercentThreshold: 50,
    });

    return (
      <Animated.FlatList
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        // viewabilityConfig={viewConfigRef.current}
        // onViewableItemsChanged={onViewRef.current}
        // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs as any}
        ref={ref as React.LegacyRef<Animated.FlatList>}
        data={constants.onboarding_screens}
        renderItem={(props) => <OnBoardingListItem {...props.item} />}
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
  }
);

export default OnBoardingList;
