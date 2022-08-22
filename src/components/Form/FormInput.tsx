import { useField, useFormikContext } from "formik";
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
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { icons } from "../../../constants";
import { tw } from "../../utils";

type FormInputProps = {
  name: string;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  maskedInputProps?: MaskInputProps;
} & TextInputProps;

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  prefixComponent,
  suffixComponent,
  containerStyle,
  maskedInputProps,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(name);

  const inputCommonProps = {
    onChangeText: (masked: string) => setFieldValue(name, masked),
    value: field.value,
  };

  return (
    <View style={[containerStyle, tw`mb-2`]}>
      {/* Label and error msg */}
      <View style={tw`ml-2 mb-1`}>
        <Text style={tw`text-gray body4`}>{label}</Text>
      </View>
      {/* Prefix component & Text input & Suffix Component */}
      <View style={tw`flex-row items-center bg-lightGray2 rounded-2xl px-4`}>
        {prefixComponent}

        <View style={tw`flex-1 flex-row items-center py-3`}>
          {maskedInputProps ? (
            <MaskInput {...maskedInputProps} {...inputCommonProps} />
          ) : (
            <TextInput
              style={tw`flex-1 body4`}
              {...props}
              {...inputCommonProps}
            />
          )}
        </View>

        {suffixComponent}
        {/* <Image source={icons.correct} style={tw`ml-1 w-4 h-4`} /> */}
      </View>
    </View>
  );
};

export default FormInput;
