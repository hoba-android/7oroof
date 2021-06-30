import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from "react-native-elements";
import { Audio } from "expo-av";
import {
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

const book = {
  id: "1",
  type: "book",
  title: "Al-Sarab, Naguib Mahfouz",
  duration: "12:05",
  category: "Fiction",
  rate: 4,
  rateseeds: 300,
  description: "rewaya",
  imgUrl: require("../../assets/sarab.jpg"),
};

function ratingCompleted(rating) {
  console.log("Rating is: " + rating);
}

const BookDetails = () => {
  const [faved, setFaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();

  const handlFav = () => {
    setFaved(!faved);
  };

  const handlPlaying = async () => {
    if (!isPlaying) {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sarab_23.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } else {
      sound.pauseAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.type}>{book.category}</Text>
      <Text style={styles.title}>{book.title}</Text>

      <Text style={styles.duration}>
        Book duration:{" "}
        <Text style={{ color: "#021168", fontSize: 16, fontWeight: "bold" }}>
          {book.duration}
        </Text>
      </Text>

      <View style={styles.imagBg1}>
        <View style={styles.imagBg2}>
          <Image source={book.imgUrl} style={styles.img} />

          <TouchableOpacity style={styles.playBox} onPress={handlPlaying}>
            {isPlaying ? (
              <MaterialCommunityIcons name="pause" size={24} color="white" />
            ) : (
              <MaterialCommunityIcons name="play" size={24} color="white" />
            )}

            <Text style={{ color: "white", fontSize: 15, marginLeft: 10 }}>
              Audibook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fav} onPress={handlFav}>
            {faved ? (
              <Fontisto name="star" size={24} color="blue" />
            ) : (
              <SimpleLineIcons name="star" size={24} color="blue" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <Text style={styles.star}>{book.rate}</Text>
        <Octicons name="star" size={18} color="orange" />
        <Text style={{ marginLeft: 5, fontSize: 15, color: "grey" }}>
          : {book.rateseeds} ratings
        </Text>
      </View>

      <Text style={styles.rate}>Rate the audiobook</Text>

      <Rating
        type="star"
        ratingCount={5}
        imageSize={30}
        onFinishRating={ratingCompleted}
      />
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  main: {
    paddingLeft: 12,
  },
  type: {
    fontSize: 18,
    color: "#F94023",
  },
  title: {
    fontSize: 30,
    color: "#021168",
    marginBottom: 15,
  },
  duration: {
    fontSize: 18,
    color: "grey",
    marginBottom: 15,
  },
  imagBg1: {
    width: "95%",
    height: 300,
    backgroundColor: "#F0F1FA",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignSelf: "flex-end",
  },
  imagBg2: {
    width: "80%",
    height: 300,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignSelf: "flex-end",
  },
  img: {
    width: "100%",
    height: 300,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignSelf: "flex-end",
  },
  star: {
    fontSize: 30,
    color: "#021168",
    marginHorizontal: 5,
  },
  rate: {
    fontSize: 20,
    color: "#021168",
    alignSelf: "center",
    marginBottom: 5,
  },
  playBox: {
    width: 120,
    height: 40,
    backgroundColor: "#090271",
    borderRadius: 5,
    position: "absolute",
    top: 250,
    left: 170,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    opacity: 1,
  },
  fav: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 250,
    left: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    opacity: 1,
  },
});
