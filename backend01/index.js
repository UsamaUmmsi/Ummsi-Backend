// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send(`Hello World!`)
// })

// app.get(`/twitter`, (req , res)=>{ 
//     res.send(`hitheshdotcom`)
// })

// app.get(`/login`,(req,res)=>{
//     res.send(`<h1> Hello This is Ummsi Have Nice Day </h1>`)
// })

// app.get(`/youtube`, (req,res) => {
//     res.send(`<h2>DG Aur Ummsi</h2>`)
// })

// app.listen(port, ()=> {
//     console.log(`Example app listening on port ${port}`);
    
// })

// require('dotenv').config()

// const express  = require(`express`)
// const app = express()
// const port = 4000


// app.get(`/`, (req,res)=>{
//     res.send(`This is test server`)
// })

// app.get(`/facebook`, (req,res)=>{
//     res.send(`Hello World`)
// })

// app.get(`/twitter`, (req,res)=>{
//     res.send(`<h1>Hey Ummsi How Are You </h1>`)
// })

// app.listen(process.env.PORT, ()=>{
//     console.log(`Example app listening on port ${port}`);
// })


// jab hum diploy karte hain to kuch specail variable k akhayal rakhana parta hai 

// .env pakage karana hota hai 


const express = require("express")
const app = express()
const port = 4000

app.get('/', (req,res)=>{
    res.send("Hey This Ummsi how are you")
})

app.get('/login', (req , res) =>{
    res.send(`<h1> Hello World </h1>`)
})

app.get('/facebook', (req,res) => {
    res.send(`
        <h1>Visit Google Links</h1>
    <ul>
      <li><a href="https://www.google.com" target="_blank">Google Homepage</a></li>
      <li><a href="https://www.google.com/search?q=javascript" target="_blank">Search JavaScript</a></li>
      <li><a href="https://www.google.com/maps" target="_blank">Google Maps</a></li>
    </ul>
      `)
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`); 
})