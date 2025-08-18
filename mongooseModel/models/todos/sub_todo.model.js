// import mongoose from 'mongoose';

// const subTodoSchema = new mongoose.model({
// contant : {
//   type: String,
//   required : true,
// },
// complete:{
//   type: Boolean,
//   default: false,
// },
// createdBy:{
//   type: mongoose.Schema.Types.ObjectId,
//   ref : "User",
// }
// }, { timestamps: true });

// export const SubTodo = mongoose.model('SubTodo', subTodoSchema);


import mongoose from "mongoose"
const subTodoSchema = new mongoose.model({
  contant:{
    type: String,
    required : true,
  },
  complete:{
    type: Boolean,
    default: false,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  subTodo:[
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "subTodo",
    }
  ]
},{timestamps: true})

export const  SubTodo = mongoose.model("SubTodo",subTodoSchema);