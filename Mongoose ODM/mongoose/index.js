import mongoose from "mongoose";
import express from "express";
import  {Todo} from "./model/Todo.js";

let a = await mongoose.connect("mongodb://localhost:27017/todo")
// const mongoose = require("mongoose");
const app = express()
const port = 3000

app.get('/health',(req,res)=> {
    const todo = new Todo({title : "Hey Jay",desc : "Where are you from?",
        isDone : false,days:"2"
    })
    todo.save()
    res.send('Jay Patel')
})

app.listen(port, ()=> {
    console.log(`This app is listen on port ${port}`)
})