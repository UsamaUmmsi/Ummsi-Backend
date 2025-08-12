// const express = require("express");
import express from "express";

const app = express();


// app.get("/", (req, res) => {
//   res.send("Server is ready now");
// });

app.use(express.static('dist'))


// get a list of 5 jokes 
app.get("/api/jokes",( req , res ) => {
  const jokes = [
  {
    id: 1,
    joke: "Teacher: What is the full form of B.E.D?",
    content: "Student: Best Ever Decision!"
  },
  {
    id: 2,
    joke: "Pappu ne fridge khola aur bola...",
    content: "'Tum abhi tak thanday kyun nahi hue?' 😄"
  },
  {
    id: 3,
    joke: "Friend: Kya kar rahe ho?",
    content: "Me: Tumse baat 😂"
  },
  {
    id: 4,
    joke: "Why did the computer go to the doctor?",
    content: "Because it had a virus! 🦠"
  },
  {
    id: 5,
    joke: "Teacher: Agar kisi question ka jawab nahi aaye to kya karte ho?",
    content: "Student: Phir usay 'out of syllabus' keh dete hain 😅"
  }
];
res.send(jokes)
});
 
const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log(`Server at http://localhost:${port}`);
});
