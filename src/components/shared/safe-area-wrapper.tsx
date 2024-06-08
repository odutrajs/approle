import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaWrapperProps = {
  children: ReactNode;
};

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
