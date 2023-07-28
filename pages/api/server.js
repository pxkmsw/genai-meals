/*
Create a server with the following specifications:
1. import express and dotenv modules
2. create the server with express and name it app
3. use port 8080 as default port
4. enable body parser to accept json data
5. state which port the server is listening to an dlog it to the console
*/

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/openai', require('./router'));

app.listen(port, () => console.log(`Listening on port ${port}`));

