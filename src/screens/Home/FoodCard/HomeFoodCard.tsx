import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { constants, dummyData, icons } from "../../../../constants";
import { IFood, IMenu } from "../../../../constants/dummyData";
import { tw } from "../../../utils";
import { RootStackNavigationProps } from "../../Screens";

interface HomeFoodCardProps {}

interface HomeFoodCardItemProps {
  item: IFood;
  navigation: RootStackNavigationProps;
}

const HomeFoodCardItem: React.FC<HomeFoodCardItemProps> = ({
  item: { name, image, description, price, calories },
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("MyCart")}
      style={tw`flex-row my-4 h-40 `}
    >
      <Image source={image} style={tw`w-1/3 h-full mr-2`} />
      <View style={tw`mt-4`}>
        <Text style={tw`h2`}>{name}</Text>
        <Text style={tw`body4 text-gray`}>{description}</Text>
        <Text style={tw`h2`}>${price}</Text>
      </View>
      <View style={tw`flex-row items-center absolute top-0 right-0`}>
        <Image source={icons.calories} style={tw`w-8 h-8`} />
        {/* <Text style={tw`body5 text-gray`}>{calories} calories</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const HomeFoodCard = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <View>
      <FlatList
        data={dummyData.menu[0].list}
        renderItem={(props) => (
          <HomeFoodCardItem navigation={navigation} {...props} />
        )}
      />
    </View>
  );
};

export default HomeFoodCard;
