import React from "react";
import { Dimensions, View } from "react-native";
import { Box, Text } from "../../../utils/theme";
import { Event } from "../../../types/Events";
import Icons from "../../../components/shared/icons";

type InfoOverlayProps = {
  data: Event;
};
const { height } = Dimensions.get("window");

export const InfoOverlay = ({ data }: InfoOverlayProps) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
        backgroundColor: "black",
        padding: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <Box
        style={{
          padding: 15,
          height: height * 0.1,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          overflow: "hidden",
          backgroundColor: "rgba(251,167,42,1)",
        }}
      >
        <Box>
          <Text
            style={[
              {
                color: "white",
                fontFamily: "GothamBold",
                fontSize: 17,
                fontWeight: 300,
              },
            ]}
          >
            {data.title}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mt="1">
          <Icons name="clock" color="black" />
          <Text
            style={{
              color: "black",
              flex: 1,
              fontSize: 13,
              fontFamily: "Gotham",
              fontWeight: 300,
              marginLeft: 5,
            }}
          >
            {data.time}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Icons name="location" color="black" />
          <Text
            style={{
              color: "black",
              flex: 1,
              fontSize: 13,
              fontFamily: "Gotham",
              marginLeft: 5,
            }}
          >
            {data.location}
          </Text>
        </Box>
      </Box>
    </View>
  );
};
