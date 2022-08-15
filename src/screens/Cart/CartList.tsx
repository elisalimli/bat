import React from "react";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { cart_data } from "../../../constants/dummyData";
import { tw } from "../../utils";
import CartListItem from "./CartListItem";

export default function App() {
  const [listData, setListData] = useState(cart_data);

  const deleteItem = ({ index }: { index: number }) => {
    let a = listData;
    a.splice(index, 1);
    setListData([...a]);
  };

  return (
    <FlatList
      style={tw`p-4`}
      data={listData}
      renderItem={(props) => (
        <CartListItem {...props} onClick={() => deleteItem(props)} />
      )}
      keyExtractor={(item) => `cart-list-item-${item.id}`}
    />
  );
}
