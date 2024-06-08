import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable } from "react-native";
import { IUser } from "../../types";
import { registerUser } from "../../services/api";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import { Box, Text } from "../../utils/theme";
import Input from "../../components/shared/input";
import { AuthScreenNavigationType } from "../../navigation/types";
import { BLOSSOM_IMAGE } from "../welcome-screen";
import Button from "../../components/shared/buttons/button";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToMusicalPreference = (email: string) => {
    navigation.navigate("MusicalPreference", { email });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data;
      await registerUser({
        email,
        name,
        password,
      });
      navigateToMusicalPreference(email);
    } catch (error) {}
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
            Criar uma conta
          </Text>
        </Box>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
              error={errors.name}
            />
          )}
          name="name"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignInScreen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Register" onPress={handleSubmit(onSubmit)} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
