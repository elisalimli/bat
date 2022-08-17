import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { dummyData, icons } from "../../../constants";
import { tw } from "../../utils";

interface MyCardListProps {}

const MyCardList = (props: MyCardListProps) => {
  return (
    <ScrollView>
      {dummyData.allCards.map(({ icon, id, name }, index) => {
        const isSelected = index === 1;
        return (
          <View
            style={[
              tw`flex-row justify-between rounded-lg p-4 mb-4`,
              !isSelected && tw`border border-lightGray1`,
              isSelected && tw`border-2 border-primary`,
            ]}
            key={`my-card-list-item-${id}`}
          >
            {/* Card icon & name */}
            <View style={tw`flex-row items-center`}>
              <Image source={icon} resizeMode="center" style={tw`w-18 h-18`} />
              <Text style={tw`h4`}>{name}</Text>
            </View>
            {/* Radio button */}
            {isSelected ? (
              <Image
                source={icons.check_on}
                resizeMode="center"
                style={tw`w-18 h-18`}
              />
            ) : (
              <Image
                source={icons.check_off}
                resizeMode="center"
                style={tw`w-18 h-18`}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MyCardList;
