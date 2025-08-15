// import mongoose from 'mongoose';

// const todoSchema = new mongoose.Schema({
//   contant: {
//     type: String,
//     required : true,
//   }, 
//     complete:{
//       type : Boolean,
//       default : false,
//     },
//     createdBy:{
//       type: mongoose.Schema.Types.ObjectId,
//       ref : "User",
//     },
//     SubTodo:[
//       {
//         type:mongoose.Schema.Types.ObjectId,
//         ref: "SubTodo",
//       }]
//     // ] Array of Sub-Todos
// }, { timestamps: true });

// export const Todo = mongoose.model('Todo', todoSchema);


// import mongoose from "mongoose"

// const todoSchema = new mongoose.schema({
//   contant: {
//     type: String,
//     required: true,
//   },
//   complete:{
//     type: Boolean,
//     default: true,
//   },
//   createdBy:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }


// },{timestamps: true});

// export const Todo = mongoose.model('Todo',todoSchema)



import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  contant:{
    type: String,
    required : true,
  },
  complete:{
    type: Boolean,
    default: true,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjextId,
    ref : "User",
  },
},{timestamps: true})

export const Todo = mongoose.model('Todo',todoSchema)