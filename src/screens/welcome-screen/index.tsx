import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import { Box, Text } from "../../utils/theme";
import Button from "../../components/shared/buttons/button";

export const BLOSSOM_IMAGE =
  "https://res.cloudinary.com/doo1vjjqi/image/upload/v1717273797/fbvuf4eatvnahczic1da.png";
const Welcome = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSignUpScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center" style={{ backgroundColor: "#000" }}>
        <Box alignItems="center" mb="3.5">
          <Image
            source={{
              uri: BLOSSOM_IMAGE,
              width: 200,
              height: 200,
            }}
          />
        </Box>
        <Text
          textAlign="center"
          variant="textXl"
          fontWeight="700"
          color="white"
        >
          Quer encontrar os melhores lugares da cidade ?
        </Text>
        <Text
          textAlign="center"
          variant="textXs"
          fontWeight="700"
          color="gray5"
          mt="3.5"
        >
          Permita a localização para uma melhor experiência
        </Text>
        <Box my="1" mx="10">
          <Button
            label="Permitir localização"
            onPress={navigateToSignUpScreen}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default Welcome;
