const express = require('express');


const app = express();

app.get("/",(req,res)=>{
    res.send('when i here my name i wanna disappear ')
})

app.listen(8080,()=>{
    console.log('listening on port 8080')
})



