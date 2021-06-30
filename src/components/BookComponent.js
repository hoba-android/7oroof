import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const BookComponent = ({ book }) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageCont}>
        <Image source={book.imgUrl} style={styles.img} />
      </View>
      <View>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subtitle}> عدد الصفحات : {book.pages} </Text>
      </View>
    </View>
  );
};

export default BookComponent;

const styles = StyleSheet.create({
  main: {
    width: 380,
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginBottom: 10,
  },
  imageCont: {
    width: 70,
    height: 100,
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
    resizeMode: "contain",
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
});
