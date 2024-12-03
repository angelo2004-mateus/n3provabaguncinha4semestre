import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Segments({ route, navigation }) {
  const { association } = route.params;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSegments, setFilteredSegments] = useState(
    association.segmentos
  );

  const filterSegments = (text) => {
    setSearchTerm(text);
    const results = association.segmentos.filter((segment) =>
      segment.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSegments(results);
  };

  const handleSegmentPress = (segment) => {
    navigation.navigate("Brands", { segmento: segment });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Segmentos em {association ? association.nome : "Carregando..."}
      </Text>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por segmento"
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={filterSegments}
      />

      <FlatList
        data={filteredSegments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSegmentPress(item)}
          >
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  card: {
    backgroundColor: "#1f1f1f",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardText: {
    color: "#e0e0e0",
    fontSize: 16,
  },
});
