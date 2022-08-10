import React from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { constants, icons, images, WINDOW } from "../../../../constants";
import { IOnBoardingScreen } from "../../../../constants/constants";
import { tw } from "../../../utils";

const HeaderLogo = () => {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={images.logo_02}
        style={{ height: 48, width: WINDOW.width / 2 }}
      />
    </View>
  );
};

const OnBoardingItem: React.FC<{ item: IOnBoardingScreen }> = ({
  item: { backgroundImage, bannerImage, title, description },
}) => {
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
};

const OnBoarding = () => {
  const scrollX = new Animated.Value(0);

  return (
    <View style={tw`flex-1`}>
      <HeaderLogo />
      <Animated.FlatList
        data={constants.onboarding_screens}
        renderItem={(props) => <OnBoardingItem item={props.item} />}
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
    </View>
  );
};

export default OnBoarding;
