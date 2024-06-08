import React from "react";
import { ScrollView, View } from "react-native";
import SafeAreaWrapper from "../../components/shared/safe-area-wrapper";
import useSWR from "swr";
import { fetcher } from "../../services/config";
import { Text } from "../../utils/theme";
import { StatusBar } from "expo-status-bar";
import Trendings from "./components/trendings";
import TrendingList from "./components/trendingList";
import TopRated from "./components/topRated";
import Button from "../../components/shared/buttons/button";
import useUserGlobalStore from "../../store/useUserGlobalStore";

const mockEvents = [
  {
    id: 1,
    title: "TORA BAR",
    time: "Sábado, 11 de Novembro",
    hour: "20:00 - 05:00",
    location: "Curitiba, Paraná",
    street: "R. Bpo. Dom José, 2258 - Batel",
    ticketMedioMin: 100,
    ticketMedioMax: 500,
    image: require("../../../assets/image/folderTora.png"),
    TipoOrganizador: "Organizador",
    NomeEmpresa: "Tora Bar",
    logo: require("../../../assets/image/ToraLogo.png"),
    QntdStars: 3,
    latitude: -25.4717393,
    longitude: -49.3125257,
    gallery: {
      image1: require("../../../assets/image/ToraLogo.png"),
      image2: require("../../../assets/image/ToraLogo.png"),
      video: require("../../../assets/image/videoToraBar2.mp4"),
    },
  },
  {
    id: 2,
    title: "Shed Curitiba",
    time: "Sábado, 11 de Novembro",
    hour: "20:00 - 05:00",
    location: "Curitiba, Paraná",
    street: "R. Bpo. Dom José, 2258 - Batel",
    ticketMedioMin: 100,
    ticketMedioMax: 500,
    image: require("../../../assets/image/Shed.png"),
    TipoOrganizador: "Estabelecimento",
    NomeEmpresa: "Shed Curitiba",
    logo: require("../../../assets/image/shedlogo.png"),
    QntdStars: 5,
    description: "Muito massa",
    latitude: -25.4284,
    longitude: -49.2733,
  },
];

const HomeScreen = () => {
  const { data, isLoading } = useSWR("/user/getall", fetcher);

  const handleLogout = () => {
    useUserGlobalStore.getState().clearUser();
  };

  return (
    <>
      <SafeAreaWrapper>
        <View>
          <StatusBar style="light" />
        </View>
        <Text color="white">Olá, </Text>
        <Text color="white">Thiago 👋</Text>
        <Button label="Logout" onPress={handleLogout} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Trendings data={mockEvents} />
          <TrendingList title="Roles recomendados" data={mockEvents} />
          <TopRated title="Roles recomendados" data={mockEvents} />
        </ScrollView>
      </SafeAreaWrapper>
    </>
  );
};

export default HomeScreen;
