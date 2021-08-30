const express = require('express');
const app=express();
const hbs = require('hbs')
const bodyparser = require('body-parser');

const path = require('path')
// app.use(bodyparser.urlencoded({ extended: false }));

// app.use("/login", express.static(__dirname + "/public"));
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

const hostname ='127.0.0.1'
const PORT=5000
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/about',(req,res)=>{
    res.status(200).json({user:'kuntal',
balance:'2000',id:"tgd34654"})
})
app.get('/contact',(req,res)=>{
    res.send("hello world about page")
})
app.get('/services',(req,res)=>{
    res.send("  <ul><li><h3>logo desingn </h3></li><li><h3>logo desingn </h3></li><li><h3>logo desingn </h3></li></ul>")
})
app.get('/login',(req,res)=>{
  res.render("index")
 })

app.post('/login',(req,res)=>{
   console.log(req.body);
   res.redirect("/")
})
app.get('/user/:id/status/:status_id',(req,res)=>{
    res.send(req.params)
})
app.get('/flight/:form-:to',(req,res)=>{
    res.send(req.params)
})
app.delete('/delete',(req,res)=>{
    res.send('delete succces')
})
app.listen(PORT,hostname,()=>{
    console.log(`server is running http://${hostname}:${PORT}`);
})