import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          black: require("../../assets/fonts/Poppins-Black.ttf"),
          "black-italic": require("../../assets/fonts/Poppins-BlackItalic.ttf"),
          "extra-bold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
          "extra-bold-italic": require("../../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
          bold: require("../../assets/fonts/Poppins-Bold.ttf"),
          boldItalic: require("../../assets/fonts/Poppins-BoldItalic.ttf"),
          "semi-bold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
          "semi-bold-italic": require("../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
          medium: require("../../assets/fonts/Poppins-Medium.ttf"),
          mediumItalic: require("../../assets/fonts/Poppins-MediumItalic.ttf"),
          regular: require("../../assets/fonts/Poppins-Regular.ttf"),
          light: require("../../assets/fonts/Poppins-Light.ttf"),
          lightItalic: require("../../assets/fonts/Poppins-LightItalic.ttf"),
          italic: require("../../assets/fonts/Poppins-Italic.ttf"),
          "extra-light": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
          "extra-light-italic": require("../../assets/fonts/Poppins-ExtraLightItalic.ttf"),
          thin: require("../../assets/fonts/Poppins-Thin.ttf"),
          thinItalic: require("../../assets/fonts/Poppins-ThinItalic.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
