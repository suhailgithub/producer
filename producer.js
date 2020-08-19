const express = require('express')
const app = express();
const axios = require('axios')

app.get('/consumeData' ,(request, response) =>{
    console.log("This comes in the GET from Producer")
    setTimeout(() => {
        response.status(200)
        response.send({"result":"successfully called producer consume data"})
    }, 10);
   
})


app.get('/consumeDataAsync' ,(request, response) =>{
    console.log("This comes in the GET from Producer")
    setTimeout(() => {
        axios.post("http://localhost:3000/consumer",{"result":"successfully called producer consume data Async"}).
        then(result =>{
            console.log("successfully posted on consumer.")
        }).catch(error =>{
            console.log(error.message)
        })
        
    }, 10000);
   response.send({"result":"successfully Queued producer consume data Async"})
})



app.listen(3001, ()=>{
    console.log("producer has started on port 3001")
})