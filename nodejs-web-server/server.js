// const http = require('http');

// const requestListener = (request, response) => {
//   response.setHeader('Content-Type', 'text/html');

//   response.statusCode = 200;
//   response.end('<h1>Halo HTTP Server!</h1>');
// };

// const server = http.createServer(requestListener);

// const port = 8000;
// const host = 'localhost';

// server.listen(port, host, () => {
//   console.log(`Server berjalan pada http://${host}:${port}`);
// });

// const http = require('http');

// const requestListener = (request, response) => {
//   response.setHeader('Content-Type', 'text/html');

//   response.statusCode = 200;
//   const { method } = request;

//   // TODO! Latihan Handling Request
//   if (method === 'GET') {
//     response.end('<h1>Hallo HTTP</h1>');
//   }
//   if (method === 'POST') {
//     response.end('<h1>Hallo HTTP POST</h1>');
//   }
//   if (method === 'PUT') {
//     response.end('<h1>Hallo HTTP PUT</h1>');
//   }
//   if (method === 'DELETE') {
//     response.end('<h1>Hallo HTTP DELETE</h1>');
//   }
// };

// const server = http.createServer(requestListener);

// const port = 6000;
// const host = 'localhost';

// server.listen(port, host, () => {
//   console.log(`Server berjalan pada http://${host}:${port}`);
// });

const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  response.statusCode = 200;
  const { method } = request;

  // TODO! Latihan Mendapatkan Body Request
  if (method === 'GET') {
    response.end('<h1>Hallo HTTP</h1>');
  }
  if (method === 'POST') {
    // deklarasikan variabel body dan inisialisasikan nilainya dengan array kosong
    let body = [];

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      /** 
      Menampilkan data body yang bernilai data string JSON
      Hasil : Hai, {"name": "Dicoding"}! 
      **/

      /*global Buffer, Buffer*/
      /*eslint no-undef: "error"*/
      body = Buffer.concat(body).toString();

      /** 
      Menampilkan data body dari yang bernilai data string JSON
      Hasil {"name": "Dicoding"} diconvert dengan menggunakan JSON.parse untuk mengubah
      JSON string menjadi JavaScript objek
      Hasil : Hai, Dicoding!
      **/
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }
};

const server = http.createServer(requestListener);

const port = 6000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
