import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthScreenNavigationType } from "../../../navigation/types";
import theme from "../../../utils/theme";
import useUserGlobalStore from "../../../store/useUserGlobalStore";
import { GenreMusicalData, genresData } from "./genresData";
import axiosInstance from "../../../services/config";

type RouteParams = {
  MusicalPreference: { email: string };
};

const MusicalPreference = () => {
  const { user } = useUserGlobalStore();
  const navigation =
    useNavigation<AuthScreenNavigationType<"MusicalPreference">>();
  const route = useRoute<RouteProp<RouteParams, "MusicalPreference">>();
  const email = route.params.email;
  const [selectedGenres, setSelectedGenres] = useState<GenreMusicalData[]>([]);

  const toggleGenre = (genre: GenreMusicalData) => {
    if (
      selectedGenres.some((selectedGenre) => selectedGenre.name === genre.name)
    ) {
      setSelectedGenres((prevGenres) =>
        prevGenres.filter((selectedGenre) => selectedGenre.name !== genre.name)
      );
    } else {
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    }
  };

  const updatePreferenceMusical = async () => {
    try {
      const response = await axiosInstance.put("/user/musical/preferences", {
        email,
        musicalPreferences: selectedGenres.map((genre) => ({
          name: genre.name,
        })),
      });
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {genresData.map((genre) => (
              <TouchableOpacity
                key={genre.name}
                onPress={() => toggleGenre(genre)}
                style={[
                  styles.genreContainer,
                  selectedGenres.some(
                    (selectedGenre) => selectedGenre.name === genre.name
                  ) && styles.genreContainerSelected,
                  {
                    opacity: selectedGenres.some(
                      (selectedGenre) => selectedGenre.name === genre.name
                    )
                      ? 1
                      : 0.5,
                  },
                ]}
              >
                <Image source={genre.image} style={styles.genreImage} />
                <Text style={styles.genreName}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            if (selectedGenres.length > 0) {
              updatePreferenceMusical();
            }
          }}
          style={[
            styles.nextButton,
            {
              opacity: selectedGenres.length > 0 ? 1 : 0.5,
            },
          ]}
          disabled={selectedGenres.length === 0}
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  genreContainer: {
    margin: 10,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "transparent",
  },
  genreContainerSelected: {
    borderColor: theme.colors.primary,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  genreImage: {
    width: 140,
    height: 140,
    marginBottom: 5,
    borderRadius: 20,
  },
  genreName: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  nextButton: {
    marginBottom: 30,
    backgroundColor: "#fba72a",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 12,
    alignSelf: "center",
    width: "90%",
  },
  nextButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default MusicalPreference;
