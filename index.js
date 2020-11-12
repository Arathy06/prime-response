

var express = require('express')

var app=express()



app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})

app.get("/prime",(req,res)=>{

    var i,n;

    for(i=1,n=100;i<=n;i++)
{
    if(n%i==0)
    {
        res.send(i)
    }
}
})

