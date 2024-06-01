import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthStackParamList } from "./types";
import Welcome from "../screens/welcome-screen";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signup";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
