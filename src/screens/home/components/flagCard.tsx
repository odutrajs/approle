import React from "react";
import { View } from "react-native";
import { Text } from "../../../utils/theme";

interface FlagCardProps {
  text: string;
}

export const FlagCard = ({ text }: FlagCardProps) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(251,167,42,1)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 15,
        position: "absolute",
        zIndex: 1,
        top: 10,
        left: 0,
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        Recomendado para Você
      </Text>
    </View>
  );
};
