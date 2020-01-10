const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.listen(port, console.log(`Server is listening at port ${port}.`));

module.exports = app;
