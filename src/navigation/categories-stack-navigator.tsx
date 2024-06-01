import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoriesStackParamList } from "./types";
import CategoriesScreen from "../screens/categories";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
