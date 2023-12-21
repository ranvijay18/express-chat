const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');



app.use(bodyParser.urlencoded({extended: false}))






app.use(loginRouter);
app.use(userRouter);


app.use((req,res,next) => {
    res.send('<h1>Page not found</h1>');
  });

  



app.listen(3000);