const express = require('express')



let app = express()


// initialising after installing ejs

app.set('views','views')
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

//to check if its working
app.get('/',(req,res) => {

    res.render('razorpay.ejs')

})
const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));