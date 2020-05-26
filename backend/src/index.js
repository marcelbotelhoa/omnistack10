const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://admin:m4rc3l@cluster0-zfums.mongodb.net/radardev?retryWrites=true&w=majority', {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)