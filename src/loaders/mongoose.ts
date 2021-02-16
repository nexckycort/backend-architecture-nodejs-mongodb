import mongoose from 'mongoose'
import { Db } from 'mongodb'

import { mongodbUri } from 'config'

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  return connection.connection.db
}
