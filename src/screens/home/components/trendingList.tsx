import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Box, Text } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { Event } from "../../../types/Events";

type TrendingListProps = {
  title: string;
  data: Event[];
};

const { width, height } = Dimensions.get("window");

const TrendingList = ({ data, title }: TrendingListProps) => {
  const navigation = useNavigation();
  return (
    <Box mb="2" ml="4">
      <Box
        flexDirection="row"
        mx="4"
        mt="12"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" variant="textXl">
          {title}
        </Text>
        <TouchableOpacity>
          <Text variant="textXl">See all</Text>
        </TouchableOpacity>
      </Box>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback key={index}>
            <Box ml="1" mr="4">
              <Image
                source={item.image}
                style={{
                  borderRadius: 16,
                  width: width * 0.33,
                  height: height * 0.22,
                }}
              />
              <Text color="gray300" ml="1">
                {item.title.length > 147
                  ? item.title.slice(0, 14) + "..."
                  : item.title}
              </Text>
            </Box>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </Box>
  );
};

export default TrendingList;
