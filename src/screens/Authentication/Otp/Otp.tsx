import React from "react";
import { Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { tw } from "../../../utils";
import AuthLayout from "../AuthLayout";
import Button from "../../../components/Form/Button";

const Otp = () => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication has been sent to john @example.com"
    >
      {/* OTP Section */}
      <View style={tw`h-20 bg-white`}>
        <OTPInputView
          codeInputFieldStyle={tw`w-14 h-14 h3 text-black bg-lightGray2 rounded-lg`}
          pinCount={4}
          onCodeFilled={(code) => console.log("code => ", code)}
        />
      </View>
      {/* Didn't recive code */}
      <View style={tw`flex-row justify-center`}>
        <Text style={tw`body3 text-gray`}>Didn't recieve code?</Text>
        <Button textStyle={tw`text-primary`}>Resend (60s)</Button>
      </View>
    </AuthLayout>
  );
};

export default Otp;
