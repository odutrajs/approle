import React, { useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const CompletedScreen = () => {
  const { params: item } = useRoute();

  useEffect(() => {}, [item]);

  return (
    <BlurView intensity={5} style={styles.blur}>
      <LinearGradient
        colors={["rgba(24,26,32,1)", "rgba(63,77,119,1)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.28, 0.8]}
        style={styles.gradient}
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000000", // Fundo preto
  },
  gradientContainer: {
    position: "absolute",
    top: -100,
    right: -60,
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: width / 1.5,
    overflow: "hidden",
  },
  blur: {
    flex: 1,
    borderRadius: width / 1.1,
  },
  gradient: {
    flex: 1,
  },
});

export default CompletedScreen;
