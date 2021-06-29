import AudioBook from '../models/AudioBook';

const AudioBooks = [
  new AudioBook('1', 
  'Audiobook', 
  'layaly alf lela', 
  60, 
  'Fiction', 
  4.5, 
  300, 
  'A renowned Nobel Prize-winning novelist refashions the classic tales of Scheherazade in his own imaginative, spellbinding style.', 
  require('../../assets/layaly.jpg'), ),

  AudioBook ('2', 
  'Audiobook', 
  'Alles walkelab', 
  23, 
  'Fiction', 
  4.2, 
  110, 
  'Alles walkelab.', 
  require('../../assets/les.jpg'), ),

];

export default AudioBooks;