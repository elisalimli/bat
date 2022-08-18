import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TextInputProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import { icons } from "../../../constants";
import { tw } from "../../utils";

type FormInputProps = {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  maskedInput?: React.ReactNode;
} & TextInputProps;

const FormInput: React.FC<FormInputProps> = ({
  label,
  prefixComponent,
  suffixComponent,
  containerStyle,
  maskedInput,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      {/* Label and error msg */}
      <View style={tw`ml-2 mb-1`}>
        <Text style={tw`text-gray body4`}>{label}</Text>
      </View>
      {/* Prefix component & Text input & Suffix Component */}
      <View style={tw`flex-row items-center bg-lightGray2 rounded-2xl px-4`}>
        {prefixComponent}

        <View style={tw`flex-1 flex-row items-center py-3`}>
          {maskedInput ? (
            maskedInput
          ) : (
            <TextInput style={tw`flex-1 body4`} {...props} />
          )}
        </View>

        {suffixComponent}
        {/* <Image source={icons.correct} style={tw`ml-1 w-4 h-4`} /> */}
      </View>
    </View>
  );
};

export default FormInput;
