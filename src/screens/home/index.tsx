import React from "react";
import { Text, View } from "react-native";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import useSWR from "swr";
import { fetcher } from "../../services/config";

const HomeScreen = () => {
  const { data, isLoading } = useSWR("/user/getall", fetcher);
  console.log(data);
  return (
    <SafeAreaWrapper>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
