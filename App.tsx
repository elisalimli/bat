import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./src/hooks";
import Main from "./src/Screens";
import { tw } from "./src/utils";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Main /> */}
        <Text style={tw`text-primary text-2xl`}>Hello world</Text>
      </SafeAreaProvider>
    );
  }
}
