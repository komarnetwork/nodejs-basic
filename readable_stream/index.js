const fs = require("fs");

const readableStream = fs.createReadStream(
  "/Users/mymac/Documents/root/learn-javascript/nodejs-basic/readable_stream/article.txt",
  {
    highWaterMark: 10,
  }
);

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
