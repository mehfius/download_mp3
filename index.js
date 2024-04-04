const ytdl = require('ytdl-core');
const fs = require('fs');

const url = 'https://www.youtube.com/watch?v=vglkukcW6KQ';

const stream = ytdl(url, {
  filter: 'audioonly',
  format: 'mp3',
});

let downloaded = 0;
let total = 0;

stream.on('progress', (chunkLength, downloadedBytes, totalBytes) => {
  downloaded += chunkLength;
  total = totalBytes || total;
  const percent = (downloaded / total) * 100;
  console.log(`Downloaded ${downloaded} bytes (${percent.toFixed(2)}%)`);
});

stream.pipe(fs.createWriteStream('audio.mp3'));
