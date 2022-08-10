import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Header from "../../components/Header";
import { tw } from "../../utils";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      console.log("tabpressed");
      e.preventDefault();
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={tw`p-2 bg-white flex-1`}>
      {/* Header */}
      <Header />
    </View>
  );
};

export default Home;
