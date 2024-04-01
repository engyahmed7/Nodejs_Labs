const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 7000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'main.html'));
});

app.get('/pages/welcome.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'welcome.html'));
});

app.get('/js/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'script.js'));
    });

app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'));
    });

    app.get('/clients.json', (req, res) => {
        res.sendFile(path.join(__dirname, 'clients.json'));
      });

app.post('/pages/welcome.html', (req, res) => {
  const { name, email, mobile, address } = req.body;
  const newClient = { name, email, mobile, address };

  fs.readFile('clients.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    let clients = [];
    if (data) {
      clients = JSON.parse(data);
    }

    clients.push(newClient);
    fs.writeFile('clients.json', JSON.stringify(clients), 'utf8', (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
        return;
      }
      const welcomePage = fs.readFileSync(path.join(__dirname, 'pages', 'welcome.html'), 'utf8');
      const updatedWelcomePage = welcomePage
        .replace('{name}', name)
        .replace('{email}', email)
        .replace('{mobile}', mobile)
        .replace('{address}', address);
      res.send(updatedWelcomePage);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
