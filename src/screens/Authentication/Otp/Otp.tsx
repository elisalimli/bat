import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { tw } from "../../../utils";
import AuthLayout from "../AuthLayout";
import Button from "../../../components/Form/Button";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import TermsAndConditions from "./TermsAndConditions";

const Otp = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

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
      <View style={tw`flex-row items-start justify-center flex-1`}>
        <Text style={tw`body4 text-gray`}>Didn't recieve code?</Text>
        <Button
          disabled={timer > 0}
          onPress={() => setTimer(60)}
          textStyle={[
            tw`h4 text-primary`,
            timer > 0 && tw`text-transparentPrimary`,
          ]}
          containerStyle={tw`ml-1`}
        >
          Resend ({timer}s)
        </Button>
      </View>
      {/* Continue Button & Terms and Conditions */}
      <View>
        <Button variant="primary">Continue</Button>
        <Text style={tw`text-center text-gray body4 mt-4`}>
          By signing up, you agree to our
        </Text>
      </View>
      <TermsAndConditions />
    </AuthLayout>
  );
};

export default Otp;
