const http = require('http');
const fs = require('fs');

let formContentHTML = '';
let formStatusCode;
fs.readFile('./pages/main.html', 'utf-8', (err, data) => {
  if (err) {
    formContentHTML = err.message;
    formStatusCode = 404;
  } else {
    formContentHTML = data;
    formStatusCode = 200;
  }
});

let formJS = '';
fs.readFile('./js/script.js', (err, data) => {
  if (err) {
    formJS = err.message;
  } else {
    formJS = data;
  }
});

let welcomePage = '';
fs.readFile('./pages/welcome.html', 'utf-8', (err, data) => {
  if (err) {
    welcomePage = err.message;
  } else {
    welcomePage = data;
  }
});

let welcomeStyle = '';
fs.readFile('./css/style.css', 'utf-8', (err, data) => {
  if (err) {
    welcomeStyle = err.message;
  } else {
    welcomeStyle = data;
  }
});


http
  .createServer((req, res) => {
    console.log(req.url);
    // #region Get
    if (req.method === 'GET') {
      switch (req.url) {
        case '/':
        case '/main.html':
        case '/pages/main.html':
          res.writeHead(formStatusCode, { 'Content-Type': 'text/html' });
          res.write(formContentHTML);
          res.end();
          break;

        case '/script.js':
        case '/js/script.js':
          res.writeHead(formStatusCode, { 'Content-Type': 'text/javascript' });
          res.write(formJS);
          res.end(); 
          break;

          case '/welcome.html':
          case '/pages/welcome.html':
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(welcomePage);
              res.end(); 
              break;

          case '/style.css':
          case '/css/style.css':
              res.writeHead(200, { 'Content-Type': 'text/css' });
              res.write(welcomeStyle);
              res.end(); 
              break;

              case '/clients.json':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                fs.readFile('clients.json', 'utf8', (err, data) => {
                  if (err) {
                    console.error(err.message);
                    res.end();
                    return;
                  }
                  res.write(data);
                  res.end();
                });
                break;
              
        default:
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('Invalid URL');
          res.end(); 
          break;
      }
    }
    // #endregion
    // #region Post
    else if (req.method === 'POST') {
      let formData = '';
      let name = '';
      let email = '';
      let mobile = '';
      let address = '';

      req.on('data', (data) => {
        formData = data.toString();
        console.log(formData);
        name = formData.split('=')[1].split('&')[0];
        email = decodeURIComponent(formData.split('=')[2].split('&')[0]);
        mobile = formData.split('=')[3].split('&')[0];
        address = formData.split('=')[4].split('&')[0];
        console.log(name);
        console.log(email);
        console.log(mobile);
        console.log(address);

        // Write data to JSON file
        const newClient = { name, email, mobile, address };
        fs.readFile('clients.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err.message);
            return;
          }

          let clients = [];
          if (data) {
            clients = JSON.parse(data);
          }

          clients.push(newClient);
          fs.writeFile('clients.json', JSON.stringify(clients), 'utf8', (err) => {
            if (err) {
              console.log(err.message);
              res.end();
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(
              welcomePage
                .replace('{name}', name)
                .replace('{email}', email)
                .replace('{mobile}', mobile)
                .replace('{addr}', address)
            );
            res.end();
          });
        });
      });
    }
    // #endregion
  })
  .listen(7000, () => {
    console.log('http://localhost:7000');
  });