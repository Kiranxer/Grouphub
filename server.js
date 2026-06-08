const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'grouphub.html')));
app.listen(PORT, () => console.log(`GroupHub running on port ${PORT}`));
