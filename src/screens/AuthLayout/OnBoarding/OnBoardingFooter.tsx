import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Text, TouchableOpacity } from "react-native";
import { constants, WINDOW } from "../../../../constants";
import { IOnBoardingCarouselSharedProps } from "../../../shared/types/IOnBoardingCarouselSharedProps";
import { tw } from "../../../utils";
import { RootStackNavigationProps } from "../../Screens";

type IOnBoardingFooterProps = {
  isLastElement: boolean;
} & IOnBoardingCarouselSharedProps;

const OnBoardingFooter = React.forwardRef<
  TouchableOpacity,
  React.PropsWithChildren<IOnBoardingFooterProps>
>(({ isLastElement, scrollX }, ref: any) => {
  const navigation = useNavigation<RootStackNavigationProps>();

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
    ref?.current?.scrollToIndex({
      index: position + 1,
      animated: true,
    });
  };

  return isLastElement ? (
    <TouchableOpacity
      style={tw`flex-1 justify-center items-center bg-primary rounded-lg py-4`}
      onPress={handleNavigationToSignIn}
    >
      <Text style={tw`text-white h4`}>Let's Get Started</Text>
    </TouchableOpacity>
  ) : (
    <Fragment>
      {/* Skip Button */}
      <TouchableOpacity
        onPress={handleNavigationToSignIn}
        style={tw`flex-1 justify-center`}
      >
        <Text style={tw`text-gray h4`}>Skip</Text>
      </TouchableOpacity>
      {/* Next Button */}
      <TouchableOpacity
        style={tw`flex-1 justify-center items-center bg-primary rounded-lg py-4`}
        onPress={handlePress}
      >
        <Text style={tw`text-white h4`}>Next</Text>
      </TouchableOpacity>
    </Fragment>
  );
});

export default OnBoardingFooter;
