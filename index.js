const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', (_req, res) => {
	res.json({ data: 'Api is accounted for' });
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

// console.log('Its aliiiiveeee!');
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
