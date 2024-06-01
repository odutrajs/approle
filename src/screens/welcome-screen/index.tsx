import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "../../utils/theme";
import Button from "../../components/shared/button";

const BLOSSOM_IMAGE =
  "https://res.cloudinary.com/doo1vjjqi/image/upload/v1717273797/fbvuf4eatvnahczic1da.png";
const Welcome = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center" bg="zinc800">
        <Box alignItems="center" mb="3.5">
          <Image
            source={{
              uri: BLOSSOM_IMAGE,
              width: 200,
              height: 200,
            }}
          />
        </Box>
        <Text textAlign="center" variant="textXl" fontWeight="700">
          Quer encontrar os melhores lugares da cidade ?
        </Text>
        <Box my="3.5" mx="10">
          <Button label="Encontrar" onPress={navigateToSignUpScreen} />
        </Box>
        <Text
          textAlign="center"
          variant="textXs"
          fontWeight="700"
          color="gray5"
        >
          26,698 registros hoje
        </Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default Welcome;
