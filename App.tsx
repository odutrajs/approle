import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/utils/theme";
import { SWRConfig } from "swr";
import { AppState } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Gotham: require("./assets/fonts/Gotham-Light.otf"),
    GothamBold: require("./assets/fonts/Gotham-Bold.otf"),
  });
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SWRConfig
          value={{
            provider: () => new Map(),
            isVisible: () => {
              return true;
            },
            initFocus(callback) {
              let appState = AppState.currentState;

              const onAppStateChange = (nextAppState: any) => {
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback();
                }
                appState = nextAppState;
              };

              const subscription = AppState.addEventListener(
                "change",
                onAppStateChange
              );

              return () => {
                subscription.remove();
              };
            },
          }}
        >
          <Navigation />
        </SWRConfig>
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
