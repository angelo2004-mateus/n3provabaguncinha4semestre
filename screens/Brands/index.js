import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Brands({ route }) {
  const { segmento } = route.params;
  const [filteredBrands, setFilteredBrands] = useState(
    segmento ? segmento.marcas : []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filterBrands = () => {
    let results = segmento.marcas;

    if (searchTerm) {
      results = results.filter(
        (brand) =>
          brand.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          brand.preco.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBrands(results);
  };

  React.useEffect(() => {
    filterBrands();
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Empresas no segmento:{" "}
        {segmento && segmento.nome ? segmento.nome : "Carregando..."}
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nome ou preço"
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredBrands}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.itemText}>{item.nome}</Text>
              <Text style={styles.desconto}>Desconto: {item.desconto}</Text>
              <Text style={styles.preco}>Preço: {item.preco}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.semEmpresas}>
            Nenhuma empresa cadastrada para esse segmento.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
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
  item: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
  },
  desconto: {
    fontSize: 14,
    color: "#a9a9a9",
  },
  preco: {
    fontSize: 14,
    color: "#b0e57c",
  },
  semEmpresas: {
    fontSize: 16,
    color: "#a9a9a9",
    textAlign: "center",
  },
});
