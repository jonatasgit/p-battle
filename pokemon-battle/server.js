const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static('./dist/pokemon-battle'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/pokemon-battle/'}
  );
});
app.listen(process.env.PORT || 8080);
  