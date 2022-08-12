import React, { useState } from "react";
import { Image, Switch, Text, TextInput, View } from "react-native";
import { icons, images } from "../../../../constants";
import FormInput from "../../../components/Form/FormInput";
import { tw } from "../../../utils";
import AuthLayout from "../AuthLayout";

const SignIn = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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

      <View style={tw`flex-row`}>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Switch
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
