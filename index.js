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

require('dotenv').config()

const express  = require(`express`)
const app = express()
const port = 4000


app.get(`/`, (req,res)=>{
    res.send(`This is test server`)
})

app.get(`/facebook`, (req,res)=>{
    res.send(`Hello World`)
})

app.get(`/twitter`, (req,res)=>{
    res.send(`<h1>Hey Ummsi How Are You </h1>`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})


// jab hum diploy karte hain to kuch specail variable k akhayal rakhana parta hai 

// .env pakage karana hota hai 