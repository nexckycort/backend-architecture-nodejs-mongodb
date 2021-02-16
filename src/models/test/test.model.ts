import mongoose from 'mongoose'

interface ITest {
  test: number
}

const Test = new mongoose.Schema({
  test: Number
})

export default mongoose.model<ITest & mongoose.Document>('Test', Test)
