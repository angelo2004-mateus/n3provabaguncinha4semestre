import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { data } from "../../data";

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (text) => {
    setSearchTerm(text);
    const results = data.filter((item) =>
      item.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma Associação</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por associação"
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={filterData}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Segments", { association: item })
            }
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
    fontSize: 24,
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
