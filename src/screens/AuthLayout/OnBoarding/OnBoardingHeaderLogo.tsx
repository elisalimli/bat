import { Image, View } from "react-native";
import { images, WINDOW } from "../../../../constants";

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

export default HeaderLogo;
