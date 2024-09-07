const express= require('express')

const app=express();

app.get('/',(req,res)=>{
    return res.send('hello from home page')
})

app.get('/about',(req,res)=>{
    return res.send('hello from your page '+'hey '+req.query.name)
})


function myhandler(req,res){

}
const server=http.createServer(app)

server.listen(3000)