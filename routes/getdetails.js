const express = require('express')

const router = express.Router();

router.get('/getdetails',(req,res) => {

    res.render('details.ejs')

});

module.exports= router;