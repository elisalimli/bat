import { Image, View } from "react-native";
import { images, WINDOW } from "../../../../constants";

export const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      source={images.logo_02}
      style={{ height: WINDOW.height * 0.075, width: WINDOW.width / 2 }}
    />
  );
};

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
      <Logo />
    </View>
  );
};

export default HeaderLogo;
