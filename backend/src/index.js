const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wwxlq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// json deve vir antes de routes
app.use(express.json());
app.use(routes);

// porta de acesso http://localhost:3333/
app.listen(3333);