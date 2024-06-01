import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "./types";
import HomeScreen from "../screens/home";
import EditTaskScreen from "../screens/editTask";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
