import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { icons, images } from "../../../../constants";
import FormInput from "../../../components/Form/FormInput";
import { tw } from "../../../utils";
import AuthLayout from "../AuthLayout";
import { Switch } from "react-native-switch";
import { useGetColor } from "../../../hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../Screens";

const SignUp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <AuthLayout
      title="Let's Sign You Up"
      subTitle="Welcome back, you've been missed"
    >
      <FormInput
        label="Email"
        placeholder="john@example.com"
        suffixComponent={
          <Image style={tw`w-4 h-4 tint-green`} source={icons.correct} />
        }
      />
      <View style={tw`mb-4`}></View>
      <FormInput label="Password" placeholder="****" secureTextEntry />

      {/* Save Me & Forgot password */}
      <View style={tw`flex-row justify-between mt-2`}>
        <View style={tw`flex-row items-center`}>
          <Switch
            activeText=""
            inActiveText=""
            onValueChange={toggleSwitch}
            value={isEnabled}
            circleSize={14}
            barHeight={18}
            circleBorderWidth={0}
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchLeftPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2.5} // multiplied by the `circleSize` prop to calculate total width of the Switch
            backgroundActive={useGetColor("primary")}
            backgroundInactive={useGetColor("gray")}
          />
          <TouchableOpacity>
            <Text style={tw`text-gray ml-2 body4`}>Save me</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-gray body4 text-sm`}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-4 flex-1`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Otp")}
          style={tw`bg-primary py-4 justify-center items-center rounded-2xl`}
        >
          <Text style={tw`text-white h3`}>Sign Up</Text>
        </TouchableOpacity>
        <View style={tw`flex-row justify-center items-center mt-4`}>
          <Text style={tw`text-gray body4`}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={tw`ml-2`}
          >
            <Text style={tw`text-primary h4`}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={tw`flex-row justify-center items-center bg-blue rounded-lg py-3`}
        >
          <Image source={icons.fb} style={tw`w-4 h-4 mr-2`} />
          <Text style={tw`text-white body4`}>Continue With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row justify-center items-center rounded-lg py-3 mt-1 mb-2`}
        >
          <Image source={icons.google} style={tw`w-4 h-4 mr-2`} />
          <Text style={tw`body4`}>Continue With Google</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
