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
  const isStepCompleted = index < currentStep;

  return (
    <View>
      <View style={tw`flex-row`}>
        <View style={tw`items-center mr-3`}>
          {/* Check mark icon */}
          <Image
            source={icons.check_circle}
            style={[tw`w-10 h-10`, !isStepCompleted && tw`tint-lightGray1`]}
          />

          {/* If is not last element show completed or uncompleted icon */}
          {!isLastElement ? (
            <Fragment>
              {isStepCompleted ? (
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
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <View style={tw`flex-1`}>
      <Header>
        <Header.Left>
          <HeaderBack />
        </Header.Left>
        <Header.Title>Delivery Status</Header.Title>
      </Header>
      {/* @todo create a container */}
      <View style={tw`py-4 px-8`}>
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
  );
};

export default DeliveryStatus;
