import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SWRConfig } from "swr";
import theme from "./src/utils/theme";

// Mocking AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// Mocking React Navigation
jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

export const renderWithProviders = (component) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <SWRConfig value={{ provider: () => new Map() }}>
            {component}
          </SWRConfig>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
