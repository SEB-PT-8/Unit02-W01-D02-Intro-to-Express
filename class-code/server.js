const express = require('express') // import the express package

const app = express() // creates an instance of express Server



// app.get(): takes 2 arguments
// 1. the route: /homepage
// 2. function
app.get('/homepage',function(request,response){
    console.log(__dirname)
    response.sendFile(__dirname + '/views/homepage.html')
 
})





// exercise 2:
// Create a /about route
// when we get this request it should send back a <p> element with 1 scentence describing you

app.listen(3000)

