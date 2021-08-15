const express = require('express')

//const Razorpay = require('razorpay')

let app = express()



// initialising after installing ejs

app.use(
    express.urlencoded({extended: false}))

    app.set("view engine", "ejs");

//to check if its working
app.get('/',(req,res) => {

    res.render('razorpay.ejs')

})


const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));



//routes
//app.use('/',require('./routes/getdetails'));

//in order to setup api key
// const razorpay = new Razorpay({
//   key_id:'rzp_test_aOwE6JvNP9xbw3',
//   key_secret:'v3PcjYLpV7l7o7PX9FUzjnvw',  
// })