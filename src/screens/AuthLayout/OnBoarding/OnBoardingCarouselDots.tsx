import React from "react";
import { Animated, View } from "react-native";
import { constants, WINDOW } from "../../../../constants";
import { useGetColor } from "../../../hooks";
import { IOnBoardingCarouselSharedProps } from "../../../shared/types/IOnBoardingCarouselSharedProps";
import { tw } from "../../../utils";

const OnBoardingCarouselDots: React.FC<IOnBoardingCarouselSharedProps> = ({
  scrollX,
}) => {
  return (
    <View style={tw`flex-row justify-center items-center mt-8`}>
      {constants.onboarding_screens.map((m, index) => {
        const dotPosition = Animated.divide(scrollX, WINDOW.width);
        const dotOpacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        const height = dotPosition.interpolate({
          inputRange: [index - 2, index - 1, index, index + 1, index + 2],
          outputRange: [0.8 * 8, 0.8 * 10, 12, 0.8 * 10, 0.8 * 8],
          extrapolate: "clamp",
        });
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [
            useGetColor("darkGray"),
            useGetColor("primary"),
            useGetColor("darkGray"),
          ],
          extrapolate: "clamp",
        });
        const width = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 38, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[
              tw`w-3 h-3 rounded-full  mx-3`,

              { width, height },
              {
                backgroundColor: dotColor,
              },
              {
                opacity: dotOpacity,
              },
            ]}
            key={`${m.id}-dot-${index}`}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default OnBoardingCarouselDots;
