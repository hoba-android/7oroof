import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AudioBookComponent = ({ book }) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageCont}>
        <Image source={book.imgUrl} style={styles.img} />
        <TouchableOpacity style={styles.play}>
          <MaterialIcons
            name="play-arrow"
            size={35}
            color="white"
            style={{ opacity: 1 }}
          />
        </TouchableOpacity>
        <View style={styles.duration}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {book.duration}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AudioBookComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
  },
  imageCont: {
    width: 180,
    height: 180,

    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
  },
  play: {
    width: 40,
    height: 40,
    backgroundColor: "grey",
    borderRadius: 20,
    opacity: 0.7,
    position: "absolute",
    top: 130,
    left: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  duration: {
    width: 60,
    height: 25,
    backgroundColor: "grey",
    borderRadius: 5,
    opacity: 0.5,
    position: "absolute",
    top: 10,
    left: 110,
    alignItems: "center",
    justifyContent: "center",
  },
});
