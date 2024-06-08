import React from "react";
import { View } from "react-native";
import { Text } from "../../utils/theme";

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text
        style={[
          {
            color: "white",
            fontSize: 20,
            fontWeight: 700,
          },
        ]}
      >
        Rolês quentes 🔥
      </Text>
      <Text color="gray700" variant="text2Xl">
        Ver todos
      </Text>
    </View>
  );
};
