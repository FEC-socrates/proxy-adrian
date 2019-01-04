const express = require('express');
const app = express();
const port = 6543;

app.use('/', express.static('./public'));

// Route any path with pattern /number/ to the public directory as well
app.use(/\/\d+\//, express.static('./public'));

app.listen(port, () => { console.log(`Proxy server is listening on port ${port}.`); });
