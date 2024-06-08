import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "react-native";
import { IUser } from "../../types";
import { AuthScreenNavigationType } from "../../navigation/types";
import { loginUser } from "../../services/api";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import { Box, Text } from "../../utils/theme";
import Input from "../../components/shared/input";
import useUserGlobalStore from "../../store/useUserGlobalStore";
import { BLOSSOM_IMAGE } from "../welcome-screen";
import ButtonLinearGradient from "../../components/shared/buttons/buttonLinearGradient";
import CustomModal from "../../components/shared/customModal";
import Button from "../../components/shared/buttons/button";

const SignInScreen = () => {
  const { updatedUser } = useUserGlobalStore();
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const { email, password } = data;
      const _user = await loginUser({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      });
      updatedUser({
        email: _user.email,
        name: _user.name,
      });
    } catch (error) {
      console.log("error in login", error);
      throw error;
    }
  };

  return (
    <SafeAreaWrapper>
      <Box
        flex={1}
        px="5.5"
        justifyContent="center"
        style={{ backgroundColor: "#000" }}
      >
        <Box alignItems="center">
          <Image
            resizeMode="stretch"
            source={{
              uri: BLOSSOM_IMAGE,
              width: 150,
              height: 150,
            }}
          />
          <Text color="white" variant="text2Xl" fontWeight="500" mt="2">
            Acessar sua conta
          </Text>
        </Box>

        <Input
          label="Email"
          onChangeText={(text) => setValue("email", text)}
          value={email}
          placeholder="Email"
          error={errors.email}
        />
        <Box mb="6" />

        <Input
          label="Password"
          onChangeText={(text) => setValue("password", text)}
          value={password}
          placeholder="Password"
          error={errors.password}
          secureTextEntry
        />
        <Box mt="5.5" />

        <Button label="Login" onPress={handleSubmit(onSubmit)} uppercase />
        <Box mb="3.5" />
        <ButtonLinearGradient
          label="Crie sua conta"
          onPress={toggleModal}
          uppercase
        />
      </Box>
      <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
