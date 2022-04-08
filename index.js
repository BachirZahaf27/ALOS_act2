const express = require('express');
const app = express();
const utils = require('./utils/newspapers-schema')
//IMPORTE ROUTES
const newspapersRoute = require('./routes/Newspapers');
const { use } = require('./routes/Newspapers');
const newsRoute = require('./routes/News');

//--- Middleware
app.use(express.json());

//--- ROUTES Middlewares
app.use('/newspapers', newspapersRoute);
app.use('/news', newsRoute);

app.get('/', (req,res) => {
    console.log('WE ARE AT HOME')
    res.send('WE ARE AT HOMEPAGE')
})

//--- LISTENING
app.listen(4000, () => {
    console.log('Climate Change API is running')
    console.log('Server is Listening')
  });
  module.exports = app;