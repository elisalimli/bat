import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

// closing the keyboard when click outside of the keyboard box
const HideKeyboard: React.FC = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default HideKeyboard;
