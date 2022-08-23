import React, { Fragment, useState } from "react";
import { Image, Text, View } from "react-native";
import { constants, icons } from "../../../constants";
import { Header, HeaderBack } from "../../components/Header";
import { tw } from "../../utils";

interface ITrackOrderItemProps {
  index: number;
  currentStep: number;
  id: number;
  title: string;
  sub_title: string;
}

const TrackOrderItem: React.FC<ITrackOrderItemProps> = ({
  currentStep,
  title,
  sub_title,
  index,
}) => {
  const isLastElement = constants.track_order_status?.length - 1 === index;

  return (
    <View>
      <View style={tw`flex-row`}>
        <View style={tw`items-center mr-3`}>
          {/* Check mark icon */}
          <Image
            source={icons.check_circle}
            style={[
              tw`w-10 h-10`,
              !(index < currentStep) && tw`tint-lightGray1`,
            ]}
          />

          {/* If is not last element show completed or uncompleted icon */}
          {!isLastElement ? (
            <Fragment>
              {index < currentStep - 1 ? (
                <View style={tw`w-1 h-12 bg-primary`}></View>
              ) : (
                <Image style={tw`w-1 h-12`} source={icons.dotted_line} />
              )}
            </Fragment>
          ) : null}
        </View>
        {/* Title and SubTitle */}
        <View>
          <Text style={tw`h4 text-lg `}>{title}</Text>
          <Text style={tw`body4 text-gray`}>{sub_title}</Text>
        </View>
      </View>
    </View>
  );
};

const DeliveryStatus = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <View style={tw`flex-1 bg-white`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>Delivery Status</Header.Title>
      </Header>
      {/* @todo create a container */}
      <View style={tw`py-4 px-6`}>
        {/* Header */}
        <View style={tw`justify-center items-center mb-6`}>
          <Text style={tw`body4 text-gray`}>Estimated Delivery</Text>
          <Text style={tw`h1 font-black`}>12 Sept 2024 / 17:00 PM</Text>
        </View>
        <View style={tw`bg-white2 rounded-lg border border-lightGray2`}>
          <View
            style={tw`flex-row justify-between border-b-2 border-b-lightGray2 px-4 pt-5 pb-3 mb-4`}
          >
            <Text style={tw`h3`}>Track Order</Text>
            <Text style={tw`text-gray`}>NY012345</Text>
          </View>
          <View style={tw`py-2 px-3 mb-2`}>
            {/* Order Status */}
            {constants.track_order_status.map((item, index) => (
              <TrackOrderItem
                currentStep={currentStep}
                index={index}
                key={`delivery-status-${item.id}`}
                {...item}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryStatus;
