import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BookComponent from "../components/BookComponent";
import Books from "../data/dummy";

const BooksScreen = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", width: "100%" }}
    >
      <View style={styles.row}>
        <TouchableOpacity style={styles.booksButton}>
          <Text style={styles.text}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ebooksButton}>
          <Text style={styles.text}>Audiobooks</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Books}
        style={{ marginTop: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <BookComponent book={item} />;
        }}
      />
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,

    paddingHorizontal: 40,
    textAlign: "center",
    paddingTop: 10,
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0F18C6",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 380,
    borderRadius: 5,
    padding: 5,
    height: 50,
    backgroundColor: "#EEEEF0",
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
  },
  ebooksButton: {
    width: "50%",
    height: 45,
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",
  },
  booksButton: {
    width: "50%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
