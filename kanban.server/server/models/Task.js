import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Task = new Schema(
  {
    title: { type: String, required: true }

  }
)

export default Task
