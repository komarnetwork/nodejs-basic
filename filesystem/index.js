const fs = require('fs');

const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal Membaca File');
    return;
  }

  console.log(data);
};

fs.readFile(
  '/Users/mymac/Documents/root/learn-javascript/nodejs-basic/filesystem/notes.txt',
  'UTF-8',
  fileReadCallback,
);
