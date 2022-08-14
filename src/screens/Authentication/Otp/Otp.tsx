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
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../Screens";
import { useAuthStore } from "../../../store";

const Otp = () => {
  const { setAuth } = useAuthStore();
  const navigation = useNavigation<RootStackNavigationProps>();
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
          onCodeFilled={(code) => {
            const VALID_CODE = "1111";
            if (code === VALID_CODE) {
              navigation.replace("Tabs");
            }
          }}
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
        <Button
          onPress={() => {
            setAuth(true);
            navigation.replace("Home");
          }}
          variant="primary"
        >
          Continue
        </Button>
        <Text style={tw`text-center text-gray body4 mt-4`}>
          By signing up, you agree to our
        </Text>
      </View>
      <TermsAndConditions />
    </AuthLayout>
  );
};

export default Otp;
