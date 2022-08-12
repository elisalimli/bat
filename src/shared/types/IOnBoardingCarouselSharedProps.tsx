import { Animated } from "react-native";

export type IScrollX = { _value: number } & Animated.Value;

export interface IOnBoardingCarouselSharedProps {
  scrollX: IScrollX;
}
