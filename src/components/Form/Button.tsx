import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { tw } from "../../utils";

enum ButtonVariant {
  "primary",
  "outline",
  "ghost",
  "blue",
}

enum BorderRadiusVariant {
  "none",
  "sm",
  "rounded",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "full",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  borderRadius?: keyof typeof BorderRadiusVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  wrappedText?: boolean;
} & TouchableOpacityProps;

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      children,
      containerStyle,
      textStyle,
      disabled: buttonDisabled,
      isLoading,
      variant = "ghost",
      borderRadius = "lg",
      isDarkBg = false,
      wrappedText = false,
      // For override the style object
      style,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled}
        style={[
          tw`flex justify-center items-center rounded-lg`,
          [variant !== "ghost" && tw`p-4`],
          [variant === "primary" && tw`bg-primary`],
          [variant === "blue" && tw`bg-blue`],
          containerStyle,
        ]}
        {...rest}
      >
        {wrappedText ? (
          children
        ) : (
          <Text
            style={[
              tw`h4 flex`,
              [variant === "primary" && tw`text-white`],
              textStyle,
            ]}
          >
            {children}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

export default Button;
