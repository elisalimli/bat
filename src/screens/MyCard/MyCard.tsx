import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/Form/Button";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";
import { RootStackNavigationProps } from "../Screens";
import MyCardList from "./MyCardList";

const MyCard = () => {
  const navigation = useNavigation<RootStackNavigationProps>();
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>MY CARDS</Header.Title>
        <Header.Right>
          <Text></Text>
        </Header.Right>
      </Header>
      <View style={tw`flex-1 py-2 px-4`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 mb-8`}
        >
          {/* Card Header */}
          <Text style={tw`h3 ml-1 my-4`}>Add new card</Text>
          <MyCardList />
        </ScrollView>
        {/* Footer */}
        <Button onPress={() => navigation.push("AddCard")} variant="primary">
          Add
        </Button>
      </View>
    </View>
  );
};

export default MyCard;
