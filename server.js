const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).render('404.ejs', {page: 'Page not found'});
});

app.listen(port, console.log(`Server is listening at port ${port}.`));

module.exports = app;
