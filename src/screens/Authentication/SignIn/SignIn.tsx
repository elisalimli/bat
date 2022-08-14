import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Switch } from "react-native-switch";
import { icons } from "../../../../constants";
import Button from "../../../components/Form/Button";
import FormInput from "../../../components/Form/FormInput";
import { useGetColor } from "../../../hooks";
import { tw } from "../../../utils";
import { RootStackNavigationProps } from "../../Screens";
import AuthLayout from "../AuthLayout";

const SignIn = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <AuthLayout
      title="Let's Sign You In"
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
          <Button textStyle={tw`text-gray ml-2`}>Save me</Button>
        </View>
        <Button textStyle={tw`body4 text-gray`}>Forgot password?</Button>
      </View>
      <View style={tw`mt-4 flex-1`}>
        <Button
          onPress={() => navigation.push("Otp")}
          textStyle={tw`h3`}
          variant="primary"
        >
          Sign In
        </Button>
        <View style={tw`flex-row justify-center items-center mt-4`}>
          <Text style={tw`text-gray body4`}>Don't have an account ?</Text>
          <Button
            containerStyle={tw`ml-2`}
            textStyle={tw`text-primary`}
            onPress={() => navigation.push("SignUp")}
          >
            Sign up
          </Button>
        </View>
      </View>
      <View>
        <Button containerStyle={tw`flex-row`} withIcon variant="blue">
          <Image source={icons.fb} style={tw`w-4 h-4 mr-2`} />
          <Text style={tw`h4 text-white`}>Continue With Facebook</Text>
        </Button>
        <Button containerStyle={tw`flex-row my-2 p-2`} withIcon>
          <Image source={icons.google} style={tw`w-4 h-4 mr-2`} />
          <Text style={tw`body4`}>Continue With Facebook</Text>
        </Button>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
