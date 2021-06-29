import Book from '../models/Book';

const Books = [
  new Book('1', 
  'book', 
  'layaly alf lela', 
  200, 
  'Fiction', 
  4.5, 
  300, 
  'A renowned Nobel Prize-winning novelist refashions the classic tales of Scheherazade in his own imaginative, spellbinding style.', 
  require('../../assets/layaly.jpg'), ),

  new Book('2', 
  'book', 
  'Alles walkelab', 
  160, 
  'Fiction', 
  4.2, 
  110, 
  'Alles walkelab.', 
  require('../../assets/les.jpg'), ),

];

export default Books;