const express = require('express')
const Razorpay = require('razorpay')


let app = express()

//routes
app.use('/',require('./routes/getdetails'));

//in order to setup api key
const razorpay = new Razorpay({
    key_id:'rzp_test_aOwE6JvNP9xbw3',
    key_secret:'v3PcjYLpV7l7o7PX9FUzjnvw',  
})


// initialising after installing ejs

app.set('views','views')
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

//to check if its working
app.get('/',(req,res) => {

    res.render('razorpay.ejs')

})

//a post request for to get order id
app.post('/order',(req,res) => {
    let options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };

      razorpay.orders.create(options,function (err,order) {
          console.log(order)
          res.json(order)
      })
})

app.post('/is-order-complete',(req,res)=>{

    razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDoc) => {
        if(paymentDoc.status=='captured'){
            res.send('Your payment is successful')
        }
        else{
            res.redirect('/')
        }

    })

})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));