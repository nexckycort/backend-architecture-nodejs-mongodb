import { Db, MongoClient } from 'mongodb'

import { mongo } from 'config'

let db!: Db
const client = new MongoClient(mongo.uri, { useUnifiedTopology: true })

export const mongoConnection = (): Db => db

export default async (): Promise<Db> => {
  await client.connect()
  db = client.db(mongo.dbName)
  return db
}
