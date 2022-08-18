import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";
import { tw } from "../../utils";

interface RememberDetailsProps {}

const RememberDetails = (props: RememberDetailsProps) => {
  const [remember, setRemember] = useState(true);
  const handlePress = () => setRemember((prev) => !prev);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tw`mt-2 ml-2 flex-row items-center`}
    >
      <Image
        source={remember ? icons.check_on : icons.check_off}
        style={tw`w-5 h-5`}
      />
      <Text style={tw`body4 text-gray ml-2`}>Remember this card details</Text>
    </TouchableOpacity>
  );
};

export default RememberDetails;
