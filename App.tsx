import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./src/hooks";
import Screens from "./src/screens/Screens";
import { tw } from "./src/utils";
//test2

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Screens />
      </SafeAreaProvider>
    );
  }
}
