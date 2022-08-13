import React from "react";
import { Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { tw } from "../../../utils";
import AuthLayout from "../AuthLayout";

const Otp = () => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication has been sent to john@example.com"
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
      <Text></Text>
    </AuthLayout>
  );
};

export default Otp;
