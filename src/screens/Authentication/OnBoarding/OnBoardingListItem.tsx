import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WINDOW } from "../../../../constants";
import { IOnBoardingScreen } from "../../../../constants/constants";
import { tw } from "../../../utils";
import OnBoardingInfo from "./OnBoardingInfo";

const OnBoardingListItem = React.forwardRef<FlatList, IOnBoardingScreen>(
  (item, ref) => {
    const { backgroundImage, bannerImage } = item;

    return (
      <View style={{ flex: 1, width: WINDOW.width }}>
        <ImageBackground
          style={tw`justify-center items-center w-full flex flex-5`}
          source={backgroundImage}
        >
          <Image source={bannerImage} style={tw`-mb-52`} />
        </ImageBackground>
        <View style={tw`flex-2`}>
          <OnBoardingInfo {...item} />
        </View>
      </View>
    );
  }
);

export default OnBoardingListItem;
