import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AudioBookComponent from "../components/AudioBookComponent";
import AudioBooks from "../data/dummy2";

const AudioBooksScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.booksButton}>
          <Text style={styles.text}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ebooksButton}>
          <Text style={styles.text}>Audiobooks</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={AudioBooks}
        numColumns={2}
        style={{ marginTop: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <AudioBookComponent book={item} />;
        }}
      />
    </View>
  );
};

export default AudioBooksScreen;

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
  booksButton: {
    width: "50%",
    height: 45,
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",
  },
  ebooksButton: {
    width: "50%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
