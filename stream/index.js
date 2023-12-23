const fs = require("fs");

const readableStream = fs.createReadStream(
  "/Users/mymac/Documents/root/learn-javascript/nodejs-basic/stream/input.txt",
  {
    highWaterMark: 15,
  }
);

const writableStream = fs.createWriteStream('/Users/mymac/Documents/root/learn-javascript/nodejs-basic/stream/output.txt',
  {
    highWaterMark: 15,
  });
readableStream.pipe(writableStream)


readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
    console.log("Gagal membaca file");
  }
});

readableStream.on("end", () => {
  console.log("Done");
});

writableStream.on('writetable', () => {
  try {
    console.log("Berhasil menulis file");
  } catch (error) {
    console.log("Gagal menulis file");
  }
})

writableStream.on('end', () => {
  console.log("Done");
})
// writableStream.write()