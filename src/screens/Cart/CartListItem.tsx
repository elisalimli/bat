import React from "react";
import {
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { icons } from "../../../constants";
import { IFood } from "../../../constants/dummyData";
import { tw } from "../../utils";
import RightActions from "./Swipeable/RightActions";

type ICartListItemProps = {
  onClick: () => void;
} & ListRenderItemInfo<IFood>;

const CartListItem: React.FC<ICartListItemProps> = ({
  item: { name, price, image },
  index,
  onClick,
}) => {
  let row: Array<Swipeable> = [];
  let prevOpenedRow: Swipeable;

  /**
   *
   */
  //
  const closeRow = (index: number) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) prevOpenedRow.close();
    prevOpenedRow = row[index];
  };

  return (
    <View style={tw`mb-4`}>
      <Swipeable
        renderRightActions={() => <RightActions onClick={onClick} />}
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref: Swipeable) => (row[index] = ref)}
      >
        <View
          style={tw`bg-lightGray2 flex-row justify-between  p-2 rounded-lg shadow-sm`}
        >
          <View style={tw`flex-row items-center justify-center`}>
            <Image source={image} style={tw`w-14 h-18 mt-2`} />
            <View style={tw`mt-2 ml-4 mb-2`}>
              <Text style={tw`body4 font-medium`}>{name}</Text>
              <Text style={tw`text-primary h4`}>${price}</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity>
              <Image source={icons.minus} style={tw`w-6 h-6 tint-primary`} />
            </TouchableOpacity>
            <Text style={tw`h1 mx-3`}>5</Text>
            <TouchableOpacity>
              <Image source={icons.plus} style={tw`w-6 h-6 tint-primary`} />
            </TouchableOpacity>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default CartListItem;
