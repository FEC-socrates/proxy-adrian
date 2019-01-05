const express = require('express');
const app = express();
const port = 6543;

// Route any path with pattern /number/ to the public directory
app.use(/\/\d+\//, express.static('./public'));
app.use('/', express.static('./public'));

app.listen(port, () => { console.log(`Proxy server is listening on port ${port}.`); });
