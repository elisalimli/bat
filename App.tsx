import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./src/hooks";
import MainLayout from "./src/screens/MainLayout";
import { tw } from "./src/utils";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MainLayout />
        {/* <Text style={tw`text-primary text-2xl`}>Hello2 world</Text> */}
      </SafeAreaProvider>
    );
  }
}
