// Latihan Routing Request
const http = require('http');

const requestListener = (request, response) => {
  // response.setHeader('Content-Type', 'text/html');
  response.setHeader('Content-Type', 'application/json');

  response.setHeader('X-Powered-By', 'NodeJS'); // Untuk memberitahu client teknologi server apa yang kita gunakan

  // response.statusCode = 200;
  const { url, method } = request;

  // TODO! Latihan Mendapatkan Routing Request
  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      // response.end('<h1>Ini Halaman HomePage</h1>');

      response.end(
        JSON.stringify({
          message: 'Ini adalah homepage',
        }),
      );
    } else {
      response.statusCode = 400;
      // response.end(
      //   `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`,
      // );

      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        }),
      );
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      // response.end('<h1>Halo! Ini adalah halaman about</h1>');

      response.end(
        JSON.stringify({
          message: 'Halo! Ini adalah halaman about',
        }),
      );
    } else if (method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        response.statusCode = 200;
        /*global Buffer, Buffer*/
        /*eslint no-undef: "error"*/
        body = Buffer.concat(body).toString();

        const { name } = JSON.parse(body);
        // response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
        response.end(
          JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about`,
          }),
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`,
      );
    }
  } else {
    response.statusCode = 404;
    // response.end('<h1>Halaman tidak ditemukan!</h1>');
    response.end(JSON.stringify({ message: 'Halaman tidak ditemukan!' })); // mengubah objek JavaScript menjadi JSON string menggunakan
    // output : {"message":"Halaman tidak ditemukan!"}
  }
};

const server = http.createServer(requestListener);

const port = 6000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
