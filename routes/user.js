const express = require('express');
const fs = require('fs');
const data = require('./data')
const router = express.Router();

router.get("/", (req,res,next) => {
   

    res.send(`${data}<form action='/' onsubmit='document.getElementById("username").value = localStorage.getItem("username")' method='POST'>
    <input type='text' name='message'>
    <input type='hidden' name='username' id='username'>
    <button type='submit'>Send</button></form>
    <script> 

    </script>
    `)
    });

router.post("/", (req,res,next) => {
    data.push(`${req.body.username}:${req.body.message}`);

    console.log(data);
    res.redirect('/');
});

module.exports = router;