import React, { forwardRef } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { WINDOW } from "../../../../constants";
import { IOnBoardingScreen } from "../../../../constants/constants";
import { tw } from "../../../utils";

interface IOnBoardingListItemProps {
  item: IOnBoardingScreen;
}

const OnBoardingListItem = React.forwardRef<FlatList, IOnBoardingListItemProps>(
  ({ item: { backgroundImage, bannerImage, description, title } }, ref) => {
    return (
      <View style={{ flex: 1, width: WINDOW.width }}>
        <ImageBackground
          style={tw`justify-center items-center w-full flex flex-3`}
          source={backgroundImage}
        >
          <Image source={bannerImage} style={tw`-mb-52`} />
        </ImageBackground>
        <View style={tw`flex-2`}>
          {/* OnBoarding Info */}
          <View style={tw`flex justify-center items-center`}>
            {/* Title */}
            <Text style={tw`mt-24 h1 font-medium`}>{title}</Text>
            {/* Description */}
            <Text style={tw`mx-4 my-2 body4 text-gray text-center`}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

export default OnBoardingListItem;
