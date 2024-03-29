const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors'); // middleware that can be used to enable CORS
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');

mongoose.connect('mongodb://localhost/node_rest_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => { console.log('MongoDB Connected') });

// middleware
app.use(cors());
app.use(express.json()); // translate JSON to object literal and backward
// middleware
app.use('/api/users', users); // if the req is for '/api/users' it will go to the endpoint at './routes/users'
app.use('/api/auth', auth);
app.use('/api/cards', cards);

const port = 3900
http.listen(port, () => { console.log(`listening to port ${port}`) });