const express = require('express');

const router = express.Router();

router.get("/login", (req,res,next) => {
    res.send("<form action='/login' method='POST'><input type='text' name='username'><button type='submit'>Login</button></form>");
    
});

router.post("/login" , (req,res,next) => {
    const user = req.body.username;
    res.send(`
    <script>
      localStorage.setItem('username', '${user}' );
      window.location.href = '/';
    </script>
  `)
})


module.exports = router;

