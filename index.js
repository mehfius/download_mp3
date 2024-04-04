
const ytdl = require('ytdl-core');
const fs = require('fs');
// Obtenha o URL do vídeo do YouTube
const url = 'https://www.youtube.com/watch?v=vglkukcW6KQ';

//const url = 'https://www.youtube.com/watch?v=RebnxklaFd0';

// Crie um stream de áudio do vídeo
const stream = ytdl(url, {
  filter: 'audioonly',
  format: 'mp3',
});

// Salve o stream de áudio em um arquivo
stream.pipe(fs.createWriteStream('audio.mp3'));