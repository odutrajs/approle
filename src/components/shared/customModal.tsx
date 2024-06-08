import React from "react";
import { Modal, View, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import ButtonLinearGradient from "./buttons/buttonLinearGradient";
import { AuthScreenNavigationType } from "../../navigation/types";
import { Box, Text } from "../../utils/theme";
import Button from "./buttons/button";

type CustomModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const { width, height } = Dimensions.get("window");

const CustomModal = ({ isVisible, onClose }: CustomModalProps) => {
  const navigation = useNavigation<AuthScreenNavigationType<"CustomModal">>();

  return (
    <Modal transparent={true} visible={isVisible}>
      <BlurView
        intensity={80}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            width: width / 1.1,
            height: height / 3.6,
            backgroundColor: "rgba(31, 34, 42, 1)",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingTop: 20,
            alignSelf: "center",
            marginTop: height / 2.7,
          }}
        >
          <Box style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text
              mt="3"
              mb="3"
              color="white"
              textAlign="center"
              variant="textXl"
            >
              Qual o tipo da sua conta ?
            </Text>
            <ButtonLinearGradient
              label="Sou usuário"
              onPress={() => {
                onClose();
                navigation.navigate("SignUp");
              }}
            />
            <Box mt="3" />
            <Button
              label="Sou empresa"
              onPress={() => {
                onClose();
                navigation.navigate("SignUp");
              }}
            />
          </Box>
        </View>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
