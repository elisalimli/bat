import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Text, TouchableOpacity } from "react-native";
import { constants, WINDOW } from "../../../../constants";
import Button from "../../../components/Form/Button";
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
    if (position === constants?.onboarding_screens?.length - 1) return;
    // scrolling to the next element
    ref?.current?.scrollToIndex({
      index: position + 1,
      animated: true,
    });
  };

  return isLastElement ? (
    <Button
      variant="primary"
      containerStyle={tw`flex-1`}
      onPress={handleNavigationToSignIn}
    >
      Let's Get Started
    </Button>
  ) : (
    <Fragment>
      {/* Skip Button */}
      <Button
        containerStyle={tw`flex-1 items-start`}
        textStyle={tw`text-gray`}
        onPress={handleNavigationToSignIn}
      >
        Skip
      </Button>
      {/* Next Button */}
      <Button
        variant="primary"
        containerStyle={tw`flex-1`}
        onPress={handleNavigationToSignIn}
      >
        Next
      </Button>
    </Fragment>
  );
});

export default OnBoardingFooter;
