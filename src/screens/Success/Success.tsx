import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, BackHandler } from "react-native";
import { images } from "../../../constants";
import Button from "../../components/Form/Button";
import { tw } from "../../utils";
import { RootStackNavigationProps } from "../Screens";

interface SuccessProps {}

const Success = (props: SuccessProps) => {
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     () => {
  //       return true;
  //     }
  //   );
  //   return () => backHandler.remove();
  // }, []);
  const navigation = useNavigation<RootStackNavigationProps>();
  const handlePress = () => navigation.navigate("DeliveryStatus");

  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Image resizeMode="contain" source={images.success} style={tw`h-1/4`} />
        <Text style={tw`h1 text-3xl mt-2`}>Congratulations!</Text>
        <Text style={tw`body4 text-gray mt-1`}>
          Payment was successfully made!
        </Text>
      </View>
      <View style={tw`p-2`}>
        <Button variant="primary" onPress={handlePress}>
          Back to Home
        </Button>
      </View>
    </View>
  );
};

export default Success;
