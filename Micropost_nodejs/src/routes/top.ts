import express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("top", {
      title: 'MicroPost App',
    });
  });

router.post("/",(req,res,next)=>{
    
})

module.exports = router;