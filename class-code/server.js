const express = require('express') // import the express package

const app = express() // creates an instance of express Server


app.use(express.static('public')) // my app will serve all static files from public folder


// app.get(): takes 2 arguments
// 1. the route: /homepage
// 2. function
app.get('/',function(req,res){
    console.log(__dirname)
    res.sendFile(__dirname + '/views/homepage.html')
 
})


app.get('/about',function(req,res){
    res.sendFile(__dirname + '/views/about.html')
})




// exercise 2:
// Create a /about route
// create an about.html file with a <p> element with 1 scentence describing you
// when we get this request it should send back the about.html

app.listen(3000,function(){
    console.log('App is working')
})

