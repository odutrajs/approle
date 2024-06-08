import React from "react";
import {
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { FlagCard } from "./flagCard";
import { InfoOverlay } from "./infoOverlay";
import { Event } from "../../../types/Events";

type TrendingsProps = {
  data: Event[];
};

const { width, height } = Dimensions.get("window");

const Trendings = ({ data }: TrendingsProps) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Movie", item);
  };
  return (
    <View>
      <Carousel
        data={data}
        renderItem={({ item, index }: { item: Event; index: number }) => (
          <EventsCard key={index} item={item} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{
          display: "flex",
          alignItems: "center",
        }}
      />
    </View>
  );
};

const EventsCard = ({ item }: { item: Event }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        {item && <FlagCard text="Recomendado para você" />}
        <Image
          source={item.image}
          style={{
            width: width * 0.6,
            height: height * 0.4,
            borderRadius: (width * 0.1) / 2,
            overflow: "hidden",
          }}
        />
        <InfoOverlay data={item} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Trendings;
