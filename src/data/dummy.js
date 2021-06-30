import Book from "../models/Book";

const Books = [
  new Book(
    "1",
    "book",
    "ليالي ألف ليلة",
    200,
    "Fiction",
    4.5,
    300,
    "A renowned Nobel Prize-winning novelist refashions the classic tales of Scheherazade in his own imaginative, spellbinding style.",
    require("../../assets/layaly.jpg")
  ),

  new Book(
    "2",
    "book",
    "اللص والكلاب",
    160,
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/les.jpg")
  ),
  new Book(
    "3",
    "book",
    "أولاد حارتنا",
    160,
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/welad.jpg")
  ),
  new Book(
    "4",
    "book",
    "الوتد",
    160,
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/watad.jpg")
  ),
  new Book(
    "5",
    "book",
    "وكالة عطية",
    250,
    "Fiction",
    3.8,
    400,
    "Alles walkelab.",
    require("../../assets/wekala.jpg")
  ),
  new Book(
    "6",
    "book",
    "صالح هيصة",
    140,
    "Fiction",
    4,
    220,
    "Alles walkelab.",
    require("../../assets/les.jpg")
  ),
  new Book(
    "7",
    "book",
    "صحراء المماليك",
    160,
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/sahara.jpg")
  ),
  new Book(
    "8",
    "book",
    "بداية ونهاية",
    210,
    "Fiction",
    3.5,
    110,
    "قصة بداية ونهاية",
    require("../../assets/bedaya.jpg")
  ),

  new Book(
    "9",
    "book",
    "بين القصرين",
    160,
    "Fiction",
    4.9,
    220,
    "اول اجزاء الثلاثية",
    require("../../assets/bain.jpg")
  ),
  new Book(
    "10",
    "book",
    "السراب",
    220,
    "Fiction",
    4.9,
    220,
    "اول اجزاء الثلاثية",
    require("../../assets/sarab.jpg")
  ),
];

export default Books;
