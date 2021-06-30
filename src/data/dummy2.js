import AudioBook from "../models/AudioBook";

const AudioBooks = [
  new AudioBook(
    "1",
    "Audiobook",
    "layaly alf lela",
    "06:07",
    "Fiction",
    4.5,
    300,
    "A renowned Nobel Prize-winning novelist refashions the classic tales of Scheherazade in his own imaginative, spellbinding style.",
    require("../../assets/layaly.jpg")
  ),

  new AudioBook(
    "2",
    "Audiobook",
    "Alles walkelab",
    "04:05",
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/les.jpg")
  ),

  new AudioBook(
    "3",
    "book",
    "أولاد حارتنا",
    "15:04",
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/welad.jpg")
  ),
  new AudioBook(
    "4",
    "book",
    "الوتد",
    "10:02",
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/watad.jpg")
  ),
  new AudioBook(
    "5",
    "book",
    "وكالة عطية",
    "08:07",
    "Fiction",
    3.8,
    400,
    "Alles walkelab.",
    require("../../assets/wekala.jpg")
  ),
  new AudioBook(
    "6",
    "book",
    "صالح هيصة",
    "09:10",
    "Fiction",
    4,
    220,
    "Alles walkelab.",
    require("../../assets/les.jpg")
  ),
  new AudioBook(
    "7",
    "book",
    "صحراء المماليك",
    "15:00",
    "Fiction",
    4.2,
    110,
    "Alles walkelab.",
    require("../../assets/sahara.jpg")
  ),
  new AudioBook(
    "8",
    "book",
    "بداية ونهاية",
    "11:20",
    "Fiction",
    3.5,
    110,
    "قصة بداية ونهاية",
    require("../../assets/bedaya.jpg")
  ),

  new AudioBook(
    "9",
    "book",
    "بين القصرين",
    "12:10",
    "Fiction",
    4.9,
    220,
    "اول اجزاء الثلاثية",
    require("../../assets/bain.jpg")
  ),

  new AudioBook(
    "10",
    "book",
    "السراب",
    "12:10",
    "Fiction",
    4.9,
    220,
    "رواية",
    require("../../assets/sarab.jpg")
  ),
];

export default AudioBooks;
