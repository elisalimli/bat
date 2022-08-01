import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, { interpolateNode } from "react-native-reanimated";
import { WINDOW } from "../../../constants";
import { tw } from "../../utils";

// drawer scale and border radius animation
export default function withDrawer(WrappedComponent: React.FC) {
  const HOC = () => {
    const progress = useDrawerProgress();

    const scale = interpolateNode(progress as any, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });

    const borderRadius = interpolateNode(progress as any, {
      inputRange: [0, 1],
      outputRange: [0, WINDOW.width * 0.25],
    });

    return (
      <Animated.View
        style={[tw`bg-white flex-1`, { borderRadius, transform: [{ scale }] }]}
      >
        <WrappedComponent />
      </Animated.View>
    );
  };

  return HOC;
}
